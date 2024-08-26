// 10. Calculate the sum of numbers in an array
function sumArray(numbers) {
    var sum = 0;
   for (let i = 0; i < numbers.length; i++) {
       sum += numbers[i];
   }
   console.log(`Sum of numbers in the array: ${sum}`);
}
sumArray([1, 2, 3, 4, 5]); // 15