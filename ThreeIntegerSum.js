/**Problem Statement : 
 * Write a Program to show Sum of three Integer adds to ZERO
 */
//three elements whose sum is equal to zero
array = [0, -1, 2, -3, 1];
      
// Prints all triplets in arr[] with 0 sum    
    function sumOfThreeIntegers(array) {
        let found = false;
        /**The first for loop will run from 0 to n-3 and 
         * second for loop from i+1 to n-2 and the third for loop from j+1 to n-1. 
         * The loop counter represents the three elements of the triplet. */
        for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                /**Condition for check if the sum of elements at i’th, j’th, k’th is equal to zero or not. 
                 * If yes print the sum else continue. */
                if (array[i] + array[j] + array[k] === 0)
                {
                    document.write(array[i]);
                    document.write(" ");
                    document.write(array[j]);
                    document.write(" ");
                    document.write(array[k]);
                    document.write("<br>");
                    found = true;
                     
                }
            }
        }
        // If no triplet with 0 sum found in array
        if(found === false) {
            document.write(" not exist ");
        }
    }
   }
   sumOfThreeIntegers(array);
