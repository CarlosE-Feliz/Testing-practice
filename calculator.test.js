const { expect, it } = require('@jest/globals')
const Calculator = require('./calculator')

describe('Test', function() {
      it('sum', () =>{
         const cal = new Calculator()
         expect(cal.sum(5, 8)).toBe(13)

         expect(cal.sum(3,4)).toBe(7)

         expect(cal.sum(8,8)).toBe(16)
      })

      it('subtract', () => {
         const sub = new Calculator()
         expect(sub.subtract(5, 2)).toBe(3)
         
         expect(sub.subtract(100, 30)).toBe(70)
         
         expect(sub.subtract(40, 10)).toBe(30)
         
         expect(sub.subtract(50, 12)).toBe(38)
      })

      it('divide', () => {
         const div = new Calculator()
         
         expect(div.divide(20,2)).toBe(10)
         
         expect(div.divide(8,2)).toBe(4)

         
         expect(div.divide(8,4)).toBe(2)
         
         expect(div.divide(75, 3)).toBe(25)
      })

      it('multiply', ()=>{
         const mult = new Calculator()
         expect(mult.multiply(5,4)).toBe(20)
         
         expect(mult.multiply(12,2)).toBe(24)

         expect(mult.multiply(50,4)).toBe(200)
         
         expect(mult.multiply(15,6)).toBe(90)
      })
})





  




