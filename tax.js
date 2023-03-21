const basicSalary = parseFloat(prompt("Enter your basic salary: "));
const benefits = parseFloat(prompt("Enter your benefits: "));

// Define KRA, NHIF, and NSSF rates
const kraRates = [
  { min: 0, max: 24000, rate: 0 },
  { min: 24001, max: 32333, rate: 10 },
  { min: 32334, max: 38667, rate: 15 },
  { min: 38668, max: 47000, rate: 20 },
  { min: 47001, max: 69667, rate: 25 },
  { min: 69668, max: Infinity, rate: 30 },
];

const nhifRates = [
  { min: 0, max: 5999, rate: 150 },
  { min: 6000, max: 7999, rate: 300 },
  { min: 8000, max: 11999, rate: 400 },
  { min: 12000, max: 14999, rate: 500 },
  { min: 15000, max: 19999, rate: 600 },
  { min: 20000, max: 24999, rate: 750 },
  { min: 25000, max: 29999, rate: 850 },
  { min: 30000, max: 34999, rate: 900 },
  { min: 35000, max: 39999, rate: 950 },
  { min: 40000, max: 44999, rate: 1000 },
  { min: 45000, max: 49999, rate: 1100 },
  { min: 50000, max: 59999, rate: 1200 },
  { min: 60000, max: 69999, rate: 1300 },
  { min: 70000, max: 79999, rate: 1400 },
  { min: 80000, max: 89999, rate: 1500 },
  { min: 90000, max: 99999, rate: 1600 },
  { min: 100000, max: Infinity, rate: 1700 },
];

const nssfRates = { employee: 0.06, employer: 0.06 };

// Calculate payee (tax)
let payee = 0;
let taxableIncome = basicSalary + benefits;
for (let i = 0; i < kraRates.length; i++) {
  const rate = kraRates[i];
  if (taxableIncome >= rate.min && taxableIncome <= rate.max) {
    payee = (taxableIncome - rate.min) * (rate.rate / 100);
    break;
  } else if (taxableIncome > rate.max) {
    payee = (rate.max - rate.min) * (rate.rate / 100);
  }
}

// Calculate NHIF deductions
let nhifDeductions = 0;
for (let i = 0; i < nhifRates.length; i++) {
  const rate = nhifRates[i];
  if (basicSalary <= rate.max) {
    nhifDeductions = rate.rate;
    break;
  }
}

//