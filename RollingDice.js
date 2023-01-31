/* Problem Statement: a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times
 */
function getRandomDiceNumber(){
    return ((Math.floor(Math.random() * 10) % 6) + 1);          //get a random number between 1 to 6.
}

let diceNumberMap = new Map();
while(true){
    let randomDiceNumber = getRandomDiceNumber();               //function calling.
    let previousCount = diceNumberMap.get(randomDiceNumber);
    if (previousCount == null) {
        diceNumberMap.set(randomDiceNumber, 1);
    } else {
        diceNumberMap.set(randomDiceNumber, previousCount+1);
    }
    if(previousCount + 1 >= 10){                                      //condition for repeat till number has reached 10 times.
        console.log(randomDiceNumber + " is reached 10 times");             
        break;
    }
}

console.log(diceNumberMap);         //Printing the number which reached maximum times and minimum times.

