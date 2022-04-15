//enunciado: crie um algoritmo que converte dias em horas, quando recebe um número de dias.

//dia = 24 horas
//quantidade de dias * 24 = resultadoConversao

function converteDiasEmHoras(quantidadeDias){
    const resultadoConversao = quantidadeDias * 24
    return `${quantidadeDias} dias é equivalente a ${resultadoConversao} horas.`

}

//console.log(converteDiasEmHoras(3))