const fs = require('fs')

const bancoCsv = './data_base/database.csv'
const banco = fs.readFileSync(bancoCsv, 'utf-8')

const regexTelefone = /\(\d{2}\)\s\d{4,5}-\d{4}/g

const matchTelefone = banco.match(regexTelefone)
console.log(matchTelefone);

const patternCelular = /\(\d{2}\)\s\d{5}-\d{4}/g

const matchCelular = banco.match(patternCelular)
console.log(matchCelular);

