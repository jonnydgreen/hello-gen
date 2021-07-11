export class HelloGenError extends Error {
  public code: string

  constructor (message: string) {
    super(message)
    this.name = 'HelloGenError'
    this.code = 'HELLO_GEN_ERR'
  }
}

export interface FileWriteErrorDetails {
  path: string
  message: string | Error
}

export class FileWriteError extends HelloGenError {
  public details: FileWriteErrorDetails[]

  constructor (message: string, details: FileWriteErrorDetails[]) {
    super(message)
    Error.captureStackTrace(this, FileWriteError)
    this.name = 'FileWriteError'
    this.message = message
    this.code = 'HELLO_GEN_ERR_FILE_WRITE'
    this.details = details
  }
}
