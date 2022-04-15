//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles.
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

// tenho que dividir o num1 pelo num2, depois:
// pegar o valor do resto e dizer se ele é par
// 

//function divideNumeros(num1, num2){
//const resultadoDivisao = num1/num2
//const restoDivisao = num1%num2

  //  if(restoDivisao === 0){
    //    return "O resultado da divisão é " + (resultadoDivisao) + " e esse número é par."
    //} else{
       // return "O resultado da divisão é " + (resultadoDivisao) + " e esse número é ímpar."

   // }
//}

//console.log(divideNumeros(10,2))


//outro jeito:
function divideNumeros(num1, num2){
    const resultadoDivisao = (num1/num2).toFixed(2)
    
        if(resultadoDivisao % 2 === 0){
            return "O resultado da divisão é " + (resultadoDivisao) + " e esse número é par."
        } else{
            return "O resultado da divisão é " + (resultadoDivisao) + " e esse número é ímpar."
    
        }
    }

    console.log(divideNumeros(14,3))
