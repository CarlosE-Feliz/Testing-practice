const { it, expect } = require('@jest/globals')
const capital = require('./capital')
it('capital letter', () => {
    let str = 'pedro'
    const result = capital(str)
    expect(result).toBe('Pedro')
})





  




