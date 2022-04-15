//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
// uma constante que pegue o ano atual - ano de nascimento >= 18, então é maior de idade

function determinaMaiorOuMenorIdade(anoNascimento){
const anoAtual = 2021
const idade = 2021 - anoNascimento

    if(idade>=18){
    return "Você tem " + idade + " anos, portanto, você é maior de idade."
 } else {
    return "Você tem " + idade + " anos, portanto, você é menor de idade."
 }
}

console.log(determinaMaiorOuMenorIdade(2018))
//consertar: é pra receber o ANO DE NASCIMENTO, não a idade