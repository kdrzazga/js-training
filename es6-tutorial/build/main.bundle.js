'use strict';

const calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
    if (rate) {
        const monthlyRate = rate / 100 / 12;
    }
    const monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
    return monthlyPayment;
};

document.getElementById('calcBtn').addEventListener('click', function () {
    const principal = document.getElementById("principal").value;
    const years = document.getElementById("years").value;
    const rate = document.getElementById("rate").value;
    const monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
});
