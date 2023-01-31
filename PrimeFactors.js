/** 
 * Problem Statement : The Prime Factorization Program to store all the Prime Factors of a 
 * number n into an array and finally display the output.
 */
function prime_factors(number) {
    function is_prime(number) {
      for (let i = 2; i <= Math.sqrt(number); i++)
      {
        if (number % i === 0) return false;
      }
      return true;
    }
    const result = [];
    for (let i = 2; i <= number; i++)
    /*The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result. 
    Unlike the equality operator, the strict equality operator always considers operands of different types to be different.*/
    {
      while (is_prime(i) && number % i === 0) 
      {
        if (!result.includes(i)) result.push(i);
        number /= i;
      }
    }
    return result;
  }
  console.log(prime_factors(100));
  console.log(prime_factors(101));
  console.log(prime_factors(103));
  console.log(prime_factors(104));
  console.log(prime_factors(105));
  