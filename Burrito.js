// Burrito line for Legal Petes Code Challenge
const burritoLine = []

const takeANumber = function (legalPetes, name) {
    legalPetes.push(`${name}`)
    return `Welcome, ${name}. You are number ${legalPetes.length} in line.`
}

const nowServing = function (burritoLine) {
    let i = 0
    while (i < burritoLine.length) {
        i++
    }
    if (burritoLine.length === 0) {
        return 'There is nobody waiting to be served!'
    } else {
        return `Currently serving ${burritoLine.shift()}.`
    }
}

