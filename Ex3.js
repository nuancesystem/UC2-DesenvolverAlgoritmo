// COMPRA DE FONES PARCELADOS

const prompt = require("prompt-sync")()

let fone = Number(prompt("Custo do fone? "))
let parcelas = Number(prompt("Quantidade de parcelas? "))

let valorTotal = fone / parcelas 

console.log( "Você irá pagar 3 parcelas fixas de: " + valorTotal + '')