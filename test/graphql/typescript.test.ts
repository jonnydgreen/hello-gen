/* eslint-disable @typescript-eslint/no-floating-promises */

import { test } from 'tap'
import { TypeScript } from '../../src/graphql/'

test('TypeScript', t => {
  t.plan(1)

  t.test('constructor', t => {
    t.plan(1)

    t.test('should instantiate the class', t => {
      t.plan(1)

      const typescript = new TypeScript()
      t.ok(typescript instanceof TypeScript)
    })
  })
})
