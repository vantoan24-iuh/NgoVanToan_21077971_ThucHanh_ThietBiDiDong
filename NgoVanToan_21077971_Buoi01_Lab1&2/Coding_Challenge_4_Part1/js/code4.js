// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:

// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”

// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 

var dt1 = 275;
var dt2 = 40;
var dt3 = 430;

function tipCalculator(bill) {
    if (bill >= 50 && bill <= 300)
        return bill * 0.15;
    return bill * 0.2;
}

var tip1 = tipCalculator(dt1);
var tip2 = tipCalculator(dt2);

console.log(`The bill was ${dt1}, the tip was ${tip1}, and the total value ${dt1 + tip1}`);
console.log(`The bill was ${dt2}, the tip was ${tip2}, and the total value ${dt2 + tip2}`);
console.log(`The bill was ${dt3}, the tip was ${tipCalculator(dt3)}, and the total value ${dt3 + tipCalculator(dt3)}`);