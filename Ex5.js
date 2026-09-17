const prompt = require("prompt-sync")()
console.log("\n")


let valorEmCaixa = Number(prompt("Quanto você tem no caixa? "))
console.log("\n")
let valorEntrada = Number(prompt("Quanto entrou no caixa? "))
console.log("\n")
let valorSaida = Number(prompt("Quanto saiu do caixa? "))
console.log("\n")

let sobraDeCaixa = valorEmCaixa + valorEntrada - valorSaida

console.log("Sobraram em caixa: " + sobraDeCaixa )