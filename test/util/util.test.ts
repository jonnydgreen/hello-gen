import {
  assertEquals,
  assertRejects,
  assertStrictEquals,
  assertThrows,
} from "../dev-deps.ts";
import {
  assertNever,
  readFile,
  upperFirst,
  writeFiles,
} from "../../src/lib/util/index.ts";
import { dirname, fromFileUrl, join } from "../../src/deps.ts";

const __dirname = dirname(fromFileUrl(import.meta.url));

function createFileToWrite(
  data: string,
  dirname = "templates",
): Record<string, string> {
  return {
    [
      join(
        __dirname,
        dirname,
        `example-${Math.floor(Math.random() * 1000)}.txt`,
      )
    ]: data,
  };
}

Deno.test("Utils::assertNever: should throw if input is passed", () => {
  // Arrange
  const input: never = "" as unknown as never;

  // Assert
  assertThrows(() => assertNever(input), Error, "Unhandled input.");
});

Deno.test("Utils::upperFirst: should upper case first letter of string", () => {
  // Act
  const result = upperFirst("hello");

  // Assert
  assertStrictEquals(result, "Hello");
});

Deno.test("Utils::upperFirst: should handle empty strings", () => {
  // Act
  const result = upperFirst("");

  // Assert
  assertStrictEquals(result, "");
});

Deno.test("Utils::readFile: should read files from input path", async () => {
  // Arrange
  const fileToRead = join(__dirname, "templates", "example.txt");

  // Act
  const result = await readFile(fileToRead);

  // Assert
  assertStrictEquals(result, "Hello");
});

Deno.test("Utils::writeFiles: should write files to output path", async () => {
  const filesToWrite = {
    ...createFileToWrite("Test data 1"),
    ...createFileToWrite("Test data 2"),
  };

  try {
    // Act
    await writeFiles(filesToWrite);
    const results = [];
    for (const fileToWrite of Object.keys(filesToWrite)) {
      results.push(await readFile(fileToWrite));
    }

    // Assert
    assertEquals(results, ["Test data 1", "Test data 2"]);
  } finally {
    for (const fileToWrite of Object.keys(filesToWrite)) {
      await Deno.remove(fileToWrite).catch(() => {});
    }
  }
});

Deno.test("Utils::writeFiles: should handle multiple errors", async () => {
  const filesToWrite = {
    ...createFileToWrite("Test data 1", "wrong-dir"),
    ...createFileToWrite("Test data 2"),
    ...createFileToWrite("Test data 3", "wrong-dir"),
  };

  try {
    // Act & Assert
    await assertRejects(
      () => writeFiles(filesToWrite),
      // TODO: create FileWriteError
      Error,
      "Got 2 errors while writing file contents",
    );
  } finally {
    for (const fileToWrite of Object.keys(filesToWrite)) {
      await Deno.remove(fileToWrite).catch(() => {});
    }
  }
});
