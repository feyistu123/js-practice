function bmiCalculator(weight, height) {
    var BMI = weight /Math.pow(height, 2);
    return Math.round(BMI);
}
bmiCalculator(65, 1.8);
