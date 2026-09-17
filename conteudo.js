// OPERADORES ARITIMÉTICOS

/**
 *  Os operadores aritiméticos servem para fazer contas: São eles:
 * soma -> +
 * subtração -> -
 * multiplicação -> *
 * divisão -> /
 * resto da divisão -> %
 * 
 * */

 // importo prompt
 const prompt = require("prompt-sync")()

 // Pedindo os números para o usuário
 let numero1 = Number(prompt("Digite o primeiro número: "))
 let numero2 = Number(prompt("Digite o segundo número: " ))
 
 // Realizando as operações
 let soma = numero1 + numero2
 let subtracao = numero1 - numero2
 let multiplicar = numero1 * numero2
 let divisao = numero1 / numero2
 let resto = numero1 % numero2

 console.log( "A soma é = " + soma)
 console.log("A subtração é = " + subtracao)
 console.log( "A multiplicação é = " + multiplicar)
 console.log( "A divisão é = " + divisao)
 console.log("O resto da divisão é = " + resto)