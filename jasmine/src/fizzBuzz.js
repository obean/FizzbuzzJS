class Javabuzz {
  isDivisibleByThree(number) {
    return number % 3 == 0;
  }

  isDivisibleByFive(number) {
    return number % 5 == 0;
  }

  isDivisibleByBoth(number) {
    return this.isDivisibleByFive(number) && this.isDivisibleByThree(number);
  }

}