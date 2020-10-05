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
  
  isDivisibleByNeither(number) {
    return !this.isDivisibleByFive(number) && !this.isDivisibleByThree(number);
  }

  fizzBuzz(number) {
    if(this.isDivisibleByNeither(number)){
      return number;
    }else if(this.isDivisibleByBoth(number)) {
      return "FizzBuzz";
    }else if(this.isDivisibleByThree(number)){
      return "Fizz";
    }else if(this.isDivisibleByFive(number)) { 
      return "Buzz";
    }
  }
  throughOneHundred() {
    while(i <= 100) {
     i++;
     return this.fizzBuzz(i);
      
    }
  }
}
 


 
