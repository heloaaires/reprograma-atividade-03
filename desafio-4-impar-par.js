//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function determinaParImpar(numero){
    if(numero % 2 === 0){
        return `${numero} é um número é par.`
 }  else if(numero % 2 != 0){
    return `${numero} é um número é ímpar.`
 }
}

//console.log(determinaParImpar(13))
//podia melhorar pedindo para ele contar as letras de uma palavra e dizer se a palavra é par ou ímpar