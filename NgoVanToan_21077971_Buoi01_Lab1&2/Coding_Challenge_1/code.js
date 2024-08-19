//1. Store Mark's and John's mass and height in variables
// Data 1
var massMark1 = 78;
var heightMark1 = 1.69;
var massJohn1 = 92;
var heightJohn1 = 1.95;

// Data 2
var massMark2= 95;
var heightMark2 = 1.88;
var massJohn2 = 85;
var heightJohn = 1.76;

// 2. Calculate both their BMIs using the formula (you can even implement both versions)

function CalculateBMI(mass,height){
    return mass / (height * height);
}

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// Data 1
var maskBMI1 = CalculateBMI(massMark1,heightMark1);
var johnBMI1 = CalculateBMI(massJohn1,heightJohn1);
var markHigherBMI1 = maskBMI1 > johnBMI1;

// Data 2
var maskBMI2 = CalculateBMI(massMark2,heightMark2);
var johnBMI2 = CalculateBMI(massJohn2,heightJohn);
var markHigherBMI2 = maskBMI2 > johnBMI2;


// Data 1
console.log(`Mark's BMI1: ${maskBMI1}`);
console.log(`John's BMI1: ${johnBMI1}`);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI1}`);
// Data 2
console.log(`Mark's BMI2: ${maskBMI2}`);
console.log(`John's BMI2: ${johnBMI2}`);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI2}`);


