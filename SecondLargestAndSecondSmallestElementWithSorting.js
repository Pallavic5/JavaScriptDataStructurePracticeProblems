/**Problem Statement : Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array. */

let numbersList=[] ;        //create an array
for (let i = 0; i < 10; i++) {
    numbersList.push(Math.floor(Math.random() * 1000));         //generate three digits random numbers
}
console.log(numbersList);
numbersList.sort();
console.log("second smallest number: ",numbersList[1]);
console.log("second largest number: ",numbersList[numbersList.length-2]);