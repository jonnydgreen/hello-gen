/* eslint-disable @typescript-eslint/no-floating-promises */

import { test } from 'tap'
import { hello } from '../src'

test('hello', async (t) => {
  const result = hello()
  t.same(result, 'hello')
})
