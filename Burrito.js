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

const currentLine = function (burritoLine) {
    if (burritoLine.length === 0) {
        return `The line is currently empty.`
    } else {
        let line = []
        for (let i = 0; i < burritoLine.length; i++) {
            line.push(`${i+1}. ${burritoLine[i]}`)
        }
        return `The line is currently:` + line 
    }
}






