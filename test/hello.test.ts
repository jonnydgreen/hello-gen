/* eslint-disable @typescript-eslint/no-floating-promises */
import { test } from 'tap'
import Crackon from '../src/commands/hello'

test('Crackon', t => {
  t.plan(2)

  t.test('constructor', t => {
    t.plan(1)

    t.test('should instantiate the class', t => {
      t.plan(1)

      const crackon = new Crackon([], {} as any)
      t.ok(crackon instanceof Crackon)
    })
  })

  t.test('run', t => {
    t.plan(1)

    t.test('should run command with no error', async t => {
      t.plan(1)

      const crackon = new Crackon([], {} as any)
      const result = await crackon.run()
      t.same(result, undefined)
    })
  })
})
