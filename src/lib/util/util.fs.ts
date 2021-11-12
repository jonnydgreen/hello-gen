import { EOL } from "../../../deps.ts";

/**
 * Read file to UTF-8 string from input path.
 */
export async function readFile(inputPath: string): Promise<string> {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile(inputPath);
  return decoder.decode(data).toString();
}

/**
 * Write raw string to files, keyed by a file path.
 */
export async function writeFiles(input: Record<string, string>): Promise<void> {
  const inputs = Object.entries(input);
  const results = await Promise.allSettled(
    inputs.map(([filePath, contents]) => {
      const encoder = new TextEncoder();
      const data = encoder.encode(contents);
      return Deno.writeFile(filePath, data);
    }),
  );

  const failureResultDetails: any[] = [];
  for (const [index, result] of results.entries()) {
    if (result.status === "rejected") {
      //  istanbul ignore next: should never reach the unhappy path
      failureResultDetails.push({
        message: result.reason,
        path: inputs[index]?.[0] ?? "Unknown path",
      });
    }
  }

  if (failureResultDetails.length > 0) {
    const formattedDetails = failureResultDetails.map((result) =>
      `- ${JSON.stringify(result)}`
    ).join(`${EOL.CRLF}  `);
    // TODO: fix
    throw new Error(
      `Got ${failureResultDetails.length} errors while writing file contents:\n  ${formattedDetails}`,
      // failureResultDetails,
    );
  }
}
