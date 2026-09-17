const prompt = require("prompt-sync")()

let moedasIniciais = Number(prompt("Quantas moedas iniciais você tem? "))
let moedasGanhasMissao = Number(prompt("Cada missão ganha qunatas moedas? "))
let quantidadeDeMissoes = Number(prompt("Quantas missões completadas? "))
let itemComprado = Number(prompt("Custo por item? "))
let quantidadeUp = Number(prompt("Em quantos upgrades deseja dividir as moedas? "))

let moedasGanhas = moedasIniciais + moedasGanhasMissao * quantidadeDeMissoes

let totalmoedasMenosCompra =  moedasGanhas - itemComprado

let moedasTotaisGanhas = totalmoedasMenosCompra / quantidadeUp

console.log("Moedas ganhas no total" , moedasTotaisGanhas)
