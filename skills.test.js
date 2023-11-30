function calculateAverage(var1, var2, var3) {
    const minValue = Math.min(var1, var2, var3);
    const maxValue = Math.max(var1, var2, var3);
    console.log('Minimum value:', minValue);
    console.log('Maximum value:', maxValue);
    return (var1 + var2 + var3) / 3;
}

// Test cases
console.log(calculateAverage(1, 2, 3)); // Expected output: 2
console.log(calculateAverage(10, 20, 30)); // Expected output: 20
console.log(calculateAverage(-5, 0, 5)); // Expected output: 0
console.log(calculateAverage(100, 200, 300)); // Expected output: 200
console.log(calculateAverage(0, 0, 0)); // Expected output: 0