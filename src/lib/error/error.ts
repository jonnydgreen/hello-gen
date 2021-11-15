export interface CLIErrorOptions {
  message: string;
  code: string;
  exitCode?: number;
}

export class CLIError extends Error {
  public code: string;
  public exitCode: number;

  constructor(options: CLIErrorOptions) {
    super(options.message);

    this.code = options.code;
    this.exitCode = options.exitCode ?? -1;
  }

  toString() {
    return `${this.code} | ${this.name}: ${this.message}`;
  }
}

export interface FileWriteErrorDetails {
  path: string;
  message: string | Error;
}

export class FileWriteError extends CLIError {
  public details: FileWriteErrorDetails[];

  constructor(message: string, details: FileWriteErrorDetails[]) {
    super({ message, code: "HG0004", exitCode: 1 });
    Error.captureStackTrace(this, FileWriteError);
    this.name = "FileWriteError";
    this.details = details;
  }
}
