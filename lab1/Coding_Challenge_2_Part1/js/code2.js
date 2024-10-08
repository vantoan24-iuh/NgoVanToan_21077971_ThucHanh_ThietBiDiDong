// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Data 1
var massMark1 = 78;
var heightMark1 = 1.69;
var massJohn1 = 92;
var heightJohn1 = 1.95;

// Data 2
var massMark2= 95;
var heightMark2 = 1.88;
var massJohn2 = 85;
var heightJohn2 = 1.76;


function CalculateBMI(mass,height){
    return mass / (height * height);
}

// Data 1
var maskBMI1 = CalculateBMI(massMark1,heightMark1);
var johnBMI1 = CalculateBMI(massJohn1,heightJohn1);

// Data 2
var maskBMI2 = CalculateBMI(massMark2,heightMark2);
var johnBMI2 = CalculateBMI(massJohn2,heightJohn2);

function printHigherBMI(markBMI,johnBMI){
    if(markBMI > johnBMI){
        console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
    }
    else{
        console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`);
    }
}

printHigherBMI(maskBMI1,johnBMI1);
printHigherBMI(maskBMI2,johnBMI2);


