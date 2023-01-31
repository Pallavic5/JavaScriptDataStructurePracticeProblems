/**Problem Statement : program to sort the array and then find the 2nd largest
and the 2nd smallest element. */

let numbersList=[] ;                //create an array
for (let i = 0; i < 10; i++) {
    numbersList.push(Math.floor(Math.random() * 1000));
}
console.log(numbersList);

function getLargestNumber(numbers){
    let max=numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function getSmallestNumber(numbers){
    let min=numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

let max = getLargestNumber(numbersList);
delete numbersList[numbersList.indexOf(max)];
let secondMax = getLargestNumber(numbersList);
console.log("second maximum number: ",secondMax);

let min = getSmallestNumber(numbersList);
delete numbersList[numbersList.indexOf(min)];
let secondMin = getSmallestNumber(numbersList);
console.log("second smallest number: ",secondMin);