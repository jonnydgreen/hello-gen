import { Path } from "../deps.ts";

interface ImportMap {
  imports: Record<string, string>;
}

const repoPath = Path.resolve(new URL(".", import.meta.url).pathname, "..");

// Vendor
const vendorImportMapPath = Path.join(repoPath, "vendor", "import_map.json");
console.log(`Fetching vendor import map from ${vendorImportMapPath}`);
const vendorImportMapContents = await Deno.readTextFile(vendorImportMapPath);
const vendorImportMap: ImportMap = JSON.parse(vendorImportMapContents);

// Repo
const repoImportMapPath = Path.join(repoPath, "import_map.json");
const repoImportMap: ImportMap = {
  imports: {
    "deps": "./deps.ts",
    "test.deps": "./test.deps.ts",
    "cli/": "./cli/",
    "commands/": "./commands/",
    "ioc/": "./ioc/",
    "lib/": "./lib/",
    "services/": "./services/",
  },
};

// Add new vendor values
const vendorImports = Object.entries({
  ...vendorImportMap.imports,
  // SinonJS fix
  "https://esm.sh/v86/@types/sinon@latest/index.d.ts":
    "./vendor/esm.sh/v86/@types/sinon@10.0.11/index.d.ts",
});
for (const [importMapKey, importMapValue] of vendorImports) {
  const newImportMapValue = importMapValue.startsWith("./vendor")
    ? importMapValue
    : importMapValue.replace(/^\.\//, "./vendor/");
  console.log(
    `Adding new import map entry import.${importMapKey}=${newImportMapValue}`,
  );
  repoImportMap.imports[importMapKey] = newImportMapValue;
}

// Write out new import map
console.log(`Writing repo Import Map to ${repoImportMapPath}`);
await Deno.writeTextFile(
  repoImportMapPath,
  JSON.stringify(repoImportMap, null, 2),
);
