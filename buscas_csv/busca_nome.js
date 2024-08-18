const fs = require('fs')
const bancoCsv = './data_base/database.csv'
const banco = fs.readFileSync(bancoCsv, 'utf-8')

// Busca de A a Z, maiuscula e minusculas e com caracteres especiais.
//const patternNomes = /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/gm
const patternNomes = /^([A-Za-zÀ-ÿ]+)(?:\s?([A-Za-zÀ-ÿ]+))+/gm

const matchNome = banco.match(patternNomes)
console.log(matchNome)
