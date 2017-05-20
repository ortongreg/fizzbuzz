describe("FizzBuzz", function() {

    var fizzbuzz;

    beforeEach(function() {
        fizzbuzz = new FizzBuzz();
    });

    it("should return foo", function() {
        var result = fizzbuzz.fizzbuzz('foo');
        expect('foo').toEqual(result);
    });

    it("should return bar", function() {
        var result = fizzbuzz.fizzbuzz('bar');
        expect('bar').toEqual(result);
    });

});