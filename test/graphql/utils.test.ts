/* eslint-disable @typescript-eslint/no-floating-promises */

import { test } from 'tap'
import { assertNever, upperFirst } from '../../src/graphql'

test('Utils', t => {
  t.plan(2)

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
})
