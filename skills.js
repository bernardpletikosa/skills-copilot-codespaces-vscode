function calculateAverage(var1, var2, var3) {
    if (var1 < 0 || var2 < 0 || var3 < 0) {
        console.log('Please provide positive numbers only.');
        return;
    }

    const minValue = Math.min(var1, var2, var3);
    const maxValue = Math.max(var1, var2, var3);
    console.log('Minimum value:', minValue);
    console.log('Maximum value:', maxValue);
    return (var1 + var2 + var3) / 3;
}

function calculateNumbers(va1, var2){
    return var1 + var2;
}