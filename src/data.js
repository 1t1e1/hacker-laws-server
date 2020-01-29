const fs = require('fs')

const allText = fs.readFileSync('./assets/hacker-laws.md', 'utf8')
const arrayOfLawsName = allText.match(/###([\s\S]*?)\n\n/g)
let count = 0
const data = []

arrayOfLawsName.forEach(element => {
    let indexOfElement = allText.indexOf(element)
    let obj = {
        id: count++,
        title: element.substr(4).trim(),
        desc: allText
            .substr(indexOfElement + element.length)
            .match(/([\s\S]*?)##/)[0],
    }
    data.push(obj)
})

console.log(data)
