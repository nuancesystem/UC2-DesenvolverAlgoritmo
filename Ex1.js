// Gamer do find

const prompt = require("prompt-sync")()
console.log("\n ============== GAMER DO FIND ===========")

let sexta = Number(prompt("Quantas horas você jogou na sexta? "))
let sabado = Number(prompt(" Quantas horas você jogou no sábado? "))
let domingo = Number(prompt(" Quantas horas você jogou no domingo? "))

// somando os valores
let totalHoras = sexta + sabado + domingo

console.log( "Você jogou " + totalHoras + " horas no final de semana. Muito gag de la gag!")