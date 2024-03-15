const express = require('express')
const router = express.Router()


router.post('/ex1', function(req, res){

    /* 
        Faça um script para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
    */

    const{peca, minima, maxima} = req.body

    const medio = (Number(minima) + Number(maxima)) / 2

    res.json({peca, medio})
})

router.post('/ex2', function(req, res){

    /* 
    Escrever um script que lê o nome de um funcionário, o número de horas trabalhadas, o valor que recebe por hora e o número de filhos. Com estas informações, calcular o salário deste funcionário, sabendo que para cada filho, o funcionário recebe 3% a mais, calculado sobre o salário bruto.
    */

    const{nome, horasTrabalhadas, valorHora, filhos} = req.body

    const salariobruto = horasTrabalhadas * valorHora
    const acrescimo = 3/100 * salariobruto * filhos
    const salariofinal = salariobruto + acrescimo
    
    res.json({nome, salariofinal})
})


router.post('/ex3', function(req, res){

    /*
    Faça um script que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
    */

    const{anos, meses, dias} = req.body

    const anosConvertidos = anos * 365
    const mesesConvertidos = meses * 30

    const total = Number(anosConvertidos) + Number(mesesConvertidos) + Number(dias) 

    res.json({total})
})


router.post('/ex4', function(req, res){

    /*
        Faça um script que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias. Considerar ano com 365 dias e mês com 30 dias.
    */

    let idade = req.body.idade

    let anos = idade / 365 | 0;
    idade -= anos * 365;
    let meses = idade / 30 | 0;
    idade -= meses * 30;

    const dias = idade

    res.json({anos, meses, dias})
})


router.post('/ex5', function(req, res){

    /*
    Faça um script que leia as 3 notas de um aluno e calcule a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2, 3 e 5, respectivamente.
    */

    const{n1, n2, n3} = req.body

    mediaponderada = (Number(n1 * 2) + Number(n2 * 3) + Number(n3 * 5)) / 10

    res.json({mediaponderada})
})


router.post('/ex6', function(req, res){

    /*
    Faça um script que leia o tempo de duração de um evento em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos.
    */

    let evento = req.body.evento

    let horas = evento / 3600 | 0
    evento %= 3600;
    let minutos = evento / 60 | 0
    
    const segundos = evento % 60

    res.json({horas, minutos, segundos})
})


router.post('/ex7', function(req, res){
    /*
    Escrever um script que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total.
    */

    const{nome, salarioFixo, vendasTotais, percentual} = req.body

    const salarioTotal = (vendasTotais * percentual / 100) + Number(salarioFixo)

    res.json({nome, salarioTotal})
})


router.post('/ex8', function(req, res){
    /* 
    Faça um script que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do &lt;nome do piloto&gt; foi &lt;velocidade media calculada&gt; km/h.
    */

    const{nome, distancia, tempo} = req.body

    const velocidadeMedia = distancia / tempo

    const mensagem = `A velocidade média do ${nome} foi ${velocidadeMedia} km/h.`

    res.json({mensagem})
})


router.post('/ex9', function(req, res){
    
    /*
    Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva um Programa que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.
    */

    const{salario, nome} = req.body

    let mensagem = {}

    if(salario > 1000){
        mensagem = `O ${nome} não tem direito ao aumento`
    } else {
        const salarioFinal = Number(salario) + (Number(salario) * 30 / 100)
        mensagem = salarioFinal
    }

    res.json({mensagem})
})

module.exports = router