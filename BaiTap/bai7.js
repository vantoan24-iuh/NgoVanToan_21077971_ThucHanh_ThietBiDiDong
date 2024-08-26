// 7. Calculate the sum of even numbers greater than 10 and less than 30
function sumEvenNumbers() {
    let sum = 0;
    for (let i = 12; i < 30; i += 2) {
        sum += i;
    }
    console.log(`Sum of even numbers between 10 and 30: ${sum}`);
}
sumEvenNumbers();