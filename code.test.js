const { string } = require('yargs')
const stringLength = require('./stringLength.js')

it("returns its characters count", () => {
   expect(stringLength("hola")).toBe(4)
   expect(stringLength("hola")).not.toBe(1)
   expect(stringLength("hola")).toBeLessThan(10)
  });
it("returns its characters count", () => {
   expect(stringLength("holaa")).toBe(5)
   expect(stringLength("holaa")).not.toBe(1)
   expect(stringLength("holaa")).toBeLessThan(10)
  });
it("returns its characters count", () => {
   expect(stringLength("ha")).toBe(2)
   expect(stringLength("ha")).not.toBe(1)
   expect(stringLength("ha")).toBeLessThan(10)
  });


