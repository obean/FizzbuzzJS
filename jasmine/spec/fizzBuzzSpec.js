describe('Javabuzz', function() {
  var javabuzz;

  describe('knows when a number is', function() {
    beforeEach(function() {
      javabuzz = new Javabuzz();
    });

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('is not divisble by 3', function() {
      expect(javabuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('is divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    }); 

    it('is not divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(6)).toBe(false);
    });

    it('is divisible by 3 && 5', function() {
      expect(javabuzz.isDivisibleByBoth(15)).toBe(true);
    });

    it('is divisible by neither 3 or 5', function() {
      expect(javabuzz.isDivisibleByNeither(7)).toBe(true);
    });

    it('knows 75 is divisible by both', function() {
      expect(javabuzz.fizzBuzz(75)).toBe("FizzBuzz")
    });

  });

});
