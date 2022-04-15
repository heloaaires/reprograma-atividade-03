//Elabore um algoritmo que receba um número (1-7) 
//e devolva o dia da semana correspondente.

function determinaDiaDaSemana(numeroDia) {
    switch(numeroDia){
        case '1':
            return 'Domingo'
        case '2':
            return 'Segunda-feira'
        case '3':
            return 'Terça-feira'
        case '4':
            return 'Quarta-feira'
        case '5':
            return 'Quinta-feira'
        case '6':
            return 'Sexta-feira'
        case '7':
            return 'Sábado'
        default:
            return 'Não existe dia correspondente para esse número. Insira um valor de 1 a 7.'       

    }
}
console.log(determinaDiaDaSemana("5"))