export class CrackonError extends Error {
  public code: string

  constructor (message: string) {
    super(message)
    this.name = 'CrackonError'
    this.code = 'CRACKON_ERR'
  }
}

export interface FileWriteErrorDetails {
  path: string
  message: string | Error
}

export class FileWriteError extends CrackonError {
  public details: FileWriteErrorDetails[]

  constructor (message: string, details: FileWriteErrorDetails[]) {
    super(message)
    Error.captureStackTrace(this, FileWriteError)
    this.name = 'FileWriteError'
    this.message = message
    this.code = 'CRACKON_ERR_FILE_WRITE'
    this.details = details
  }
}
