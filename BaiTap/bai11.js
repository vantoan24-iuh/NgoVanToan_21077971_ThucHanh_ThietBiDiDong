// 11. Calculate the average of the numbers in an array
function averageArray(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(`Average of numbers in the array: ${sum / numbers.length}`);
}
averageArray([1, 2, 3, 4, 5]);
