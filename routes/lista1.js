const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){

    /*
        1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0. a. Bônus: nenhuma nota pode passar de 10.
    */

    const{n1, n2, n3, n4} = req.body

    const media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado'

    /*
    let mensagem = ''
    if(media >= 7){
        mensagem = 'Aprovado'
    } else {
        mensagem = 'Reprovado'
    }
    */

    res.json({media, mensagem})

})

router.post('/ex2', function(req, res){

    /* 
        Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e validos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitoresa. Bonus: A soma dos números não pode passar o total de eleitores.
    */

    const{total, brancos, nulos, validos} = req.body
    //const requisicoes = req.body

    //const total = Number(req.body.total)
    //const brancos = Number(req.body.brancos)
    //const nulos = Number(req.body.nulos)
    //const validos = Number(req.body.validos)

    const soma = Number(brancos) + Number(nulos) + Number(validos)
    
    let retorno = {}
    if(soma > total){

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores" 
        }

        res.status(400).json(retorno)
        
    } else {
        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = {percBranco, percNulos, percValidos}

        res.status(200).json(retorno)

    }
})

router.post('/ex3', function(req, res){
    /* 
        3. Escreva um script para ler o salário mensal atual de um funcionário e opercentual de reajuste. Calcular e escrever o valor do novo salário.
    */

    const{salario, percentual} = req.body
    
    const aumento = (percentual / 100) * salario

    const salariofinal = Number(salario) + Number(aumento)
    
    res.json({salariofinal})
    
})

router.post('/ex4', function(req, res){

    /*
        4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
    */

    const carro = Number(req.body.carro);

    const percentualdistribuidor = ( 28 / 100 ) * carro;
    
    const percentualimpostos = ( 45 / 100 ) * carro;
    
    const valorfinal = carro + percentualdistribuidor + percentualimpostos;
    
    res.json({valorfinal})
})

router.post('/ex5', function(req, res){

    /* 
        5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor
    */

        const{carro, distribuidor, imposto} = req.body
    
        const valordistribuidor = (distribuidor / 100) * carro;
        const valorimposto = (imposto / 100) * carro; 
        const valorfinal = Number(carro) + Number(valordistribuidor) + Number(valorimposto);

    res.json({valorfinal})
})


router.post('/ex6', function(req, res){
    /*
    Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
    */

    const{fixo, carros, comissao, vendas} = req.body

    const comissaocarros = carros * comissao
    const comissaovendas = ( 5 / 100 ) * vendas

    const total = Number(fixo) + Number(comissaocarros) + Number(comissaovendas)

    res.json({total})
})


router.post('/ex7', function(req, res){

    /*
        Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.
    */

    const{n1, n2} = req.body
    
    const mediaponderada = (n1 * 4 + n2 * 6) / 10
    
    res.json({mediaponderada})
})


router.post('/ex8', function(req, res){
    
    /*
        Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
    */

    const{raio, altura} = req.body
    
    const raioquadrado = raio * raio;
    const pi = 3.14;
    const volume = pi * raioquadrado * altura;

    res.json({volume})
})


router.post('/ex9', function(req, res){
    
    /*
        Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.
    */

    const{n1, n2} = req.body
    
    const soma = Number(n1) + Number(n2);
    
    const final = soma * n1;
    

    res.json({final})
})

module.exports = router