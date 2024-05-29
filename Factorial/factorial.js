function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const number = parseInt(process.argv[2], 10);

if (isNaN(number) || number < 0) {
    console.log('Please provide a non-negative integer as an argument.');
} else {
    console.log(`Factorial of ${number} is ${factorial(number)}`);
}
