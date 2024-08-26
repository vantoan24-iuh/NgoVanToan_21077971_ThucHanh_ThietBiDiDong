// 6. Calculate 10!
function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${n}: ${factorial}`);
}
calculateFactorial(10); 