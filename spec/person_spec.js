const { person } = require("../src/person")

describe("finds", function() {
    it("should compare name", function() {
        expect(person.name).toEqual("Ryan")
    })
    it("should compare age", function() {
        expect(person.age).toEqual(30)
    })
})