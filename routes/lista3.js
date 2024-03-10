const express = require('express')
const router = express.Router()


router.post('/ex1', function(req, res){

    /*
    Faça um Programa que calcule e imprima o salário reajustado de um funcionário deacordo com a seguinte regra: 
    Salários até 2.000, reajuste de 50% 
    Salários maiores que 2.000, reajuste de 30%
    */

    const salario = req.body.salario
    let salarioFinal = {}

    if(salario > 2000){
        salarioFinal = Number(salario) + (Number(salario) * 30 / 100)
    } else {
        salarioFinal = Number(salario) + (Number(salario) * 50 / 100)
    }

    res.json({salarioFinal})

})


router.post('/ex2', function(req, res){

    /*
    Faça um script que leia 3 números inteiros e verifique qual o maior, imprimindo o resultado (suponha números diferentes).
    */

    const{n1, n2, n3} = req.body

    let maior = n1

    if (n2 > maior){
        maior = n2
    }

    if (n3 > maior){
        maior = n3
    }

    const mensagem = `O maior número é ${maior}`

    res.json({mensagem})
})


router.post('/ex3', function(req, res){

    /*
    Em uma pizzaria, cada tulipa de chopp custa R$ 4,80 e uma pizza mista grande custa R$17,00, mais R$1,50 por tipo de cobertura pedida (queijo, presunto, banana, etc.). Uma turma vai à pizzaria e pede uma determinada quantidade de <chopps> e uma pizza grande com uma determinada quantidade de coberturas. Faça um algoritmo que calcule a conta e, sabendo quantas pessoas estão à mesa, quanto que cada um deve pagar (não esqueça os 10% do garçom).
    */

    const{pessoas, chopp, pizza, cobertura} = req.body

    const valorChopp = chopp * 4.80;
    const valorPizza = pizza * 17.00;
    const valorCobertura = cobertura * 1.50;

    const total = (Number(valorChopp) + Number(valorPizza) + Number(valorCobertura));
    const final = Number(total) + (Number(total) * 10 / 100)

    const porPessoa = final / pessoas

    res.json({porPessoa})
})


router.post('/ex4', function(req, res){
    /*
    Faça uma Programa que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas.
    */

    const{salarioMinimo, horasTrabalhadas, dependentes, horasExtras} = req.body

    const valorHora = salarioMinimo * 20 / 100
    const salarioBruto = Number(valorHora * horasTrabalhadas) + Number(horasExtras * (Number(valorHora) + (valorHora * 50 / 100))) + (dependentes * 32)

    let salarioLiquido;

    if(salarioBruto >= 5000){
        salarioLiquido = salarioBruto - (salarioBruto * 20 / 100)
    } else if(salario >= 2000) {
        salarioLiquido = salarioBruto - (salarioBruto * 10 / 100)
    } else {
        salarioLiquido = salarioBruto
    }

    let salarioFinal;

    if(salarioLiquido >= 3500){
        salarioFinal = salarioLiquido + 500
    } else {
        salarioFinal = salarioLiquido + 1000
    }

    res.json({salarioFinal})
})

module.exports = router