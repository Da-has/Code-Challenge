// Net Salary Calculator

//Creating the function that we'll use to provid the net salary.

function calculateNetSalary(basicSalary, benefits) {
    // Constants
    const personalRelief = 2400; 
    const shifRate = 0.0275;
    const housingLevyRate = 0.015;
    const nssfRate = 0.06;

    // Step 1: Gross Salary
    const grossSalary = basicSalary + benefits;

    // Step 2: PAYE (Tax)
    let taxablePay = grossSalary; // SHIF & NSSF are deductible before tax

    // Deduct NSSF contributions before calculating PAYE
    let nssfDeduction;
    if (basicSalary <= 8000) {
        nssfDeduction = basicSalary * nssfRate; // Tier I only
    } else if (basicSalary <= 72000) {
        // Tier I (first 8,000) + Tier II (rest up to 72,000)
        nssfDeduction = (8000 * nssfRate) + ((basicSalary - 8000) * nssfRate);
    } else {
        nssfDeduction = (8000 * nssfRate) + ((72000 - 8000) * nssfRate); // Cap at Tier II max
    }
    taxablePay -= nssfDeduction;

    // Deduct SHIF before calculating PAYE
    const shifDeduction = grossSalary * shifRate;
    taxablePay -= shifDeduction;

    // Deduct Housing Levy before calculating PAYE
    const housingLevyDeduction = grossSalary * housingLevyRate;
    taxablePay -= housingLevyDeduction;

    // PAYE Calculation
    let paye = 0;
    if (taxablePay <= 24000) {
        paye = taxablePay * 0.10;
    } else if (taxablePay <= 32333) {
        paye = (24000 * 0.10) + ((taxablePay - 24000) * 0.25);
    } else if (taxablePay <= 500000) {
        paye = (24000 * 0.10) + (8333 * 0.25) + ((taxablePay - 32333) * 0.30);
    } else if (taxablePay <= 800000) {
        paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((taxablePay - 500000) * 0.325);
    } else {
        paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((taxablePay - 800000) * 0.35);
    }

    // Apply personal relief
    paye -= personalRelief;
    if (paye < 0) paye = 0;

    // --- Step 3: Net Salary ---
    const netSalary = grossSalary - (paye + shifDeduction + nssfDeduction + housingLevyDeduction);

    // Return breakdown
    return {
        grossSalary,
        taxablePay,
        nssfDeduction,
        shifDeduction,
        housingLevyDeduction,
        paye,
        netSalary
    };
}

// --- Example Usage ---
const salaryDetails = calculateNetSalary(120000, 20000);
console.log(salaryDetails);
