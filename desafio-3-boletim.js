//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens:
//Se a media for igual ou maior que 7 - Aprovado
//Se a media for maior e igual a cinco e menor que 7 - Recuperação
//Se a media for menor que 5 - Reprovado

function calculaMedia(nota1, nota2, nota3){
    const media = ((nota1 + nota2 + nota3)/3).toFixed(2)

    if (media>=7) {
        return `Parabéns! Sua média é ${media} e você está aprovada.`
    } else if(media>=5 && media<=7) {
        return `Que pena! Sua média é ${media} e você está em recuperação.`
    } else if(media<5) {
        return `Sinto muito! Sua média é ${media} e você está aprovada.`
    }
}

//console.log(calculaMedia(5, 3, 2))