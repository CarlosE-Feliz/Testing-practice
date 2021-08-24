const { it, expect } = require('@jest/globals')
const { string } = require('yargs')
const reverse = require('./reverse')

it('Testing a reverse letter', () => {
   let str = 'friend'
   const result = reverse(str);
   expect(result).toBe('dneirf');
})

  




