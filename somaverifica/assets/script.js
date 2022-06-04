var maiorque10 = ""
var menorque20 = ""
var iguais = ""

function compara (a,b) {

    var soma = a + b

    if (soma <= 10) {
        maiorque10 = "não"
    }

    if (soma >= 20) {
        menorque20 = "não"
    }

    if (a != b) {
        iguais = "não"
    }

    return `Os numeros ${iguais} são iguais. A soma dos dois é igual à: ${soma}. Esse valor ${maiorque10} é maior que 10 e ${menorque20} é menor que 20`

}

console.log(compara(20,5));
