/* eslint-disable @typescript-eslint/no-floating-promises */

import { test } from 'tap'
import { FileWriteError } from '../../src/core'

import { assertNever, readFile, upperFirst, writeFiles } from '../../src/util'

test('Utils', t => {
  t.plan(4)

  t.test('assertNever', t => {
    t.plan(1)

    const input: never = '' as unknown as never
    t.throws(() => assertNever(input), new Error('Unhandled input.'))
  })

  t.test('upperFirst', t => {
    t.plan(2)

    t.test('Should upper case first letter of string', t => {
      t.plan(1)

      t.same(upperFirst('hello'), 'Hello')
    })

    t.test('Should handle empty strings', t => {
      t.plan(1)

      t.same(upperFirst(''), '')
    })
  })

  t.test('readFile', t => {
    t.plan(1)

    t.test('Should read files from input path', async t => {
      t.plan(1)

      const utilFs: { readFile: typeof readFile } = t.mock('../../src/util/util.fs', {
        fs: {
          promises: {
            readFile: () => Buffer.from('text')
          }
        }
      })

      const input = 'some/path/file.ext'
      t.resolves(utilFs.readFile(input))
    })
  })

  t.test('writeFiles', t => {
    t.plan(2)

    t.test('Should write files to output path', t => {
      t.plan(1)

      const utilFs: { writeFiles: typeof writeFiles } = t.mock('../../src/util/util.fs', {
        fs: {
          promises: {
            writeFile: () => {}
          }
        }
      })

      const input = {
        path1: 'contents1',
        path2: 'contents2'
      }
      t.resolves(utilFs.writeFiles(input))
    })

    t.test('Should handle multiple errors', async t => {
      t.plan(2)

      const utilFs: { writeFiles: typeof writeFiles } = t.mock('../../src/util/util.fs', {
        fs: {
          promises: {
            writeFile: (path: string) => {
              if (path.includes('error')) {
                throw new Error(`Error at path: ${path}`)
              }
            }
          }
        }
      })

      const input = {
        errorPath1: 'contents1',
        path2: 'contents2',
        errorPath3: 'contents3'
      }
      try {
        await utilFs.writeFiles(input)
      } catch (error) {
        const expectedError = new FileWriteError('Got 2 errors while writing file contents:', [
          { message: new Error('Error at path: errorPath1'), path: 'errorPath1' },
          { message: new Error('Error at path: errorPath3'), path: 'errorPath3' }
        ])
        t.same(error.code, expectedError.code)
        t.same(error.details, expectedError.details)
      }
    })
  })
})
