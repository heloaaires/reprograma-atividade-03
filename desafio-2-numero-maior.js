//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, 
//se os números forem iguais, mostre uma mensagem no console "Os números são iguais".


function determinaNumeroMaior(num1, num2) {
    if(num1>num2){
        console.log("O número "+ num1 + " é maior que " + num2)
    }else if(num1<num2){
        console.log("O número "+ num2 + " é maior que " + num1)
    }else if(num1===num2) {
        console.log("Os números tem valores iguais.")
    }    
}

//console.log(determinaNumeroMaior(10, 10)) 