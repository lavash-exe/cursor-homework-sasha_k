const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};

//1 
function getMyTaxes(salary) {
    return `Податок від зп: ${salary * this.tax}`
}
console.log(getMyTaxes.call(ukraine, 15000));
console.log(getMyTaxes.call(latvia, 15000));
console.log(getMyTaxes.call(litva, 15000));
//2 
function getMiddleTaxes(country) {
    return `Податок з середньої зп: ${this.tax * this.middleSalary}`
}
console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));
//3
function getTotalTaxes(country) {
    return `Всього податків: ${this.tax * this.middleSalary * this.vacancies}`
}

console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

//4
function getMySalary(country) {
    const min = 1500;
    const max = 2000;
    let salary = Math.trunc(Math.random() * (max - min + 1) + min)
    const taxes = Math.trunc(salary * country.tax);
    const profit = salary - taxes
    return {
        salary: salary,
        taxes: taxes,
        profit: profit
    }
}
setInterval(function() {
    console.clear()
    console.log(getMySalary(latvia));
    console.log(getMySalary(litva));
    console.log(getMySalary(ukraine));
}, 10000)
