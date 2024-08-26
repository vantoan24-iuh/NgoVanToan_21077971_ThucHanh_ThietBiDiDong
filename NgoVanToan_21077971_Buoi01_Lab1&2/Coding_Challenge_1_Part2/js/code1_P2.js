// <!-- Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores  -->


var arr1 = [44, 23, 71];
var arr2 = [65, 54, 49];
var arr3 = [85, 54, 41];
var arr4 = [23, 34, 27];

function calcAverage(score) {
    return (score[0] + score[1] + score[2]) / 3;
}

//dt1
var avg1 = calcAverage(arr1);
console.log('Score Dolphins 1: ', avg1)

var avg2 = calcAverage(arr2);
console.log('Score Koalas 1: ', avg2)

//dt2
var avg3 = calcAverage(arr3);
console.log('Score Dolphins 2: ', avg3)

var avg4 = calcAverage(arr4);
console.log('Score Koalas 2: ', avg4)


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2*avgKoalas || avgKoalas >= 2*avgDolphins) 
        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    return console.log(`No team wins`);
}

checkWinner(avg1, avg2);
checkWinner(avg3, avg4);