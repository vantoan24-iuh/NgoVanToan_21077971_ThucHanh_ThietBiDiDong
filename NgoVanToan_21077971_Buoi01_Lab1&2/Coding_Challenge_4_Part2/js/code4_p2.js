//Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15; // 15% tip
    } else {
      return bill * 0.20; // 20% tip
    }
  }
  
  // Test the function with a bill value of 100
  console.log(calcTip(100)); // Output: 15
  
  // 1. Create an array 'bills' containing the test data
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
  
  // 2. Create an array 'tips' containing the tip value for each bill
  const tips = bills.map(bill => calcTip(bill));
  console.log(tips); 
  
  // 3. Bonus: Create an array 'total' containing the total values, so the bill + tip
  const total = bills.map((bill, index) => bill + tips[index]);
  console.log(total); 

  //4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument
  function calcAverage(arr) {
    // 4.1. First, you will need to add up all values in the array
    const sum = arr.reduce((acc, value) => acc + value, 0);
    
    // 4.2. To calculate the average, divide the sum you calculated before by the length of the array
    return sum / arr.length;
  }
  
  // 4.3. Call the function with the 'totals' array
  console.log(calcAverage(total)); 