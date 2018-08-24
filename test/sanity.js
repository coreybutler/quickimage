'use strict'

const test = require('tape')

test('Sanity Check', (t) => {
  let QuickImage = require('../')

  t.ok(typeof QuickImage === 'function', 'Basic class available.')

  t.end()
})
