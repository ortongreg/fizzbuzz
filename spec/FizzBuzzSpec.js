describe("FizzBuzz", function() {

    var fizzbuzz;

    beforeEach(function() {
        fizzbuzz = new FizzBuzz();
    });

    it("should return 1 when 1 is passed", function() {
        var result = fizzbuzz.fizzbuzz(1);
        expect(1).toEqual(result);
    });

    it("should return fizz when 3 is passed", function() {
        var result = fizzbuzz.fizzbuzz(3);
        expect('fizz').toEqual(result);
    });

});