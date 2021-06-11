/* eslint-disable @typescript-eslint/no-floating-promises */

import { test } from 'tap'
import Crackon = require('../src')

test('Crackon', t => {
  t.plan(2)

  t.test('import', t => {
    t.plan(1)

    t.test('should import entry point', t => {
      t.plan(1)

      t.ok(typeof Crackon !== 'undefined')
    })
  })

  t.test('run', t => {
    t.plan(2)

    t.test('should provide run command', t => {
      t.plan(1)

      t.ok(typeof Crackon.run === 'function')
    })

    t.test('should run command with no error', async t => {
      t.plan(1)

      const result = await Crackon.run()
      t.same(result, undefined)
    })
  })
})
