/**Problem Statement: Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
etc and store them in an array */

var lastNumber, firstNumber, sum;
for(var i = 0; i < 100; i++){
    lastNumber = i % 10;
    firstNumber = Math.floor(i/10);
    sum = lastNumber * 10 + firstNumber;
    if(sum === i){
        console.log(i);
    }
}