// WORKS:
// import { default as tape } from 'tape'

// ERROR: SyntaxError: Named export 'describe' not found. 
// import { describe } from 'riteway'

// ERROR: TypeError: describe is not a function
import pkg from 'riteway'
const { describe } = pkg

import * as my_math from './math.js' // importing my EcmaScript module

describe('sum function', async assert => {
  {
    const given = 2
    const should = 4

    assert({
      given,
      should,
      actual: my_math.sum(given, given),
      expected: 4,
    })
  }
})
