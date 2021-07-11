import { promises as fs } from 'fs'
import { EOL } from 'os'

import { FileWriteError, FileWriteErrorDetails } from '../core'

/**
 * Read file to UTF-8 string from input path.
 */
export async function readFile (inputPath: string): Promise<string> {
  const buffer = await fs.readFile(inputPath)
  return buffer.toString('utf-8')
}

/**
 * Write raw string to files, keyed by a file path.
 */
export async function writeFiles (input: Record<string, string>): Promise<void> {
  const inputs = Object.entries(input)
  const results = await Promise.allSettled(inputs.map(async ([filePath, contents]) =>
    await fs.writeFile(filePath, contents)
  ))

  const failureResultDetails: FileWriteErrorDetails[] = []
  for (const [index, result] of results.entries()) {
    if (result.status === 'rejected') {
      //  istanbul ignore next: should never reach the unhappy path
      failureResultDetails.push({
        message: result.reason,
        path: inputs[index]?.[0] ?? 'Unknown path'
      })
    }
  }

  if (failureResultDetails.length > 0) {
    const formattedDetails = failureResultDetails.map(result => `- ${JSON.stringify(result)}`).join(`${EOL}  `)
    throw new FileWriteError(`Got ${failureResultDetails.length} errors while writing file contents:\n  ${formattedDetails}`, failureResultDetails)
  }
}
