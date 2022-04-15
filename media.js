//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens:
  //Se a media for igual ou maior que 7 - Aprovado
  //Se a media for maior e igual a cinco e menor que 7 - Recuperação
  //Se a media for menor que 5 - Reprovado

function calculaMedia(nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3)/3

    if (media>=7) {
        return 'Parabéns! Você está aprovada.' //melhorar essa mensagem para retornar o cálculo da média
    } else if(media>=5 && media<=7) {
        return 'Você está em recuperação. Boa sorte!'
    } else if(media<5) {
        return 'Que pena! Você foi reprovada.'
    }
}

console.log(calculaMedia(5, 8, 10))