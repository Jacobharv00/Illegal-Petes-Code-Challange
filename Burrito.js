// Burrito line for Legal Petes Code Challenge

const takeANumber = function (legalPetes, name) {
    legalPetes.push(`${name}`)
    return `Welcome, ${name}. You are number ${legalPetes.length} in line.`
}
