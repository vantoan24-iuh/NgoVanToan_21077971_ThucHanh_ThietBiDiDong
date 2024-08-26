// 4. Print all the multiplication tables with numbers from 1 to 10
function printAllMultiplicationTables() {
    for (let i = 1; i <= 10; i++) {
        console.log(`Multiplication table of ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(''); // Blank line for separation
    }
}
printAllMultiplicationTables();