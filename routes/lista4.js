const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){


const numeros = req.body.notas

for(i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}

let soma = 0

for(let n of numeros){

    soma += n

}

const media = soma / numeros.length

    res.json({media})
})

module.exports = router


router.post('/ex2', function(req, res){
    
    const valores = req.body.numeros

    const maior = Math.max(...valores)
    const menor = Math.min(...valores)

    res.json(`Dos valores inseridos o maior é ${maior}, e o menor é ${menor}`)
})


router.post('/ex3', function(req, res){

    // Escreva um script para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem crescente.

    const numeros = Array.from({ length: 10}, (_, i) => i + 1);

    res.json(`A ordem de números é: ${numeros}`);
})


router.post('/ex4', function(req, res){
    
    // Escreva um script para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.

    const numeros = Array.from({ length: 10 }, (_, i) => 10 - i)

    res.json(`A ordem de números é: ${numeros}`);
})


router.post('/ex5', function(req, res){
    
    // Escreva um script para imprimir os 10 primeiros números inteiros maiores que 100.

    const numeros = Array.from({ length: 10 }, (_, i) => 101 + i);

    res.json(`Números maiores que 100: ${numeros}`)
})


router.post('/ex6', function(req, res){
    
    // Escreva um script para ler 10 números e ao final da leitura escrever a soma total dos 10 números lidos.

    const numeros = req.body.numeros;

    const soma = numeros.reduce((acc, num) => acc + num, 0)

    res.json({ soma })
})


router.post('/ex7', function(req, res){
    
    //Ler um valor N e imprimir todos os valores pares entre 1 (inclusive) e N (inclusive).

    const n = req.body.numero;

    const valores = [];

    for (let i = 1; i <= n; i++){
        if(i % 2 === 0) {
            valores.push(i)
        }
    }

    res.json({ valores })
})

router.post('/ex8', function(req, res){
    
    //Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.

    const numeros = req.body.numeros

    const negativos = numeros.filter((num) => num < 0).length;

    res.json({ negativos })
})


router.post('/ex9', function(req, res){
    
    //Ler 10 valores e escrever quais são os valores são NEGATIVOS.

    const numeros = req.body.numeros

    const negativos = numeros.filter((num) => num < 0);

    res.json({ negativos })
})


router.post('/ex10', function(req, res){
    
    //Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] e quantos deles estão fora deste intervalo.

    const numeros = req.body.numeros;
    let dentroIntervalo = 0;
    let foraIntervalo = 0;

    for (const numero of numeros) {
        if(numero >= 10 && numero <= 20){
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
    }

    res.json({ dentroIntervalo, foraIntervalo })
})


router.post('/ex11', function(req, res){
    
    //Ler 10 valores, calcular e escrever a média aritmética desses valores lidos.

    const numeros = req.body.numeros

    const soma = numeros.reduce((acc, num) => acc + num, 0)

    const media = soma / numeros.length;

    res.json(`A média dos números lidos é ${media}`)
})


router.post('/ex12', function(req, res){
    
    //Ler N valores, calcular e escrever a média aritmética desses valores lidos.

    const numeros = req.body.numeros

    const soma = numeros.reduce((acc, num) => acc + num, 0)

    const media = soma / numeros.length;

    res.json(`A média dos números lidos é ${media}`)
})


router.post('/ex13', function(req, res){
    
    //Faça um script que leia um número N correspondente ao número de valores a serem lidos em seguida. Para cada número lido, imprimir o seu triplo.

    const numero = req.body.numero
    const triplo = []

    for(let i = 0; i < numero; i++){
        const valor = parseFloat(req.body.valores[i])
        if(!isNaN(valor)){
            triplo.push(valor * 3);
        }
    }

    res.json({ triplo })
})


router.post('/ex14', function(req, res){
    
    //Faça um script que leia 30 números positivos e, para cada número lido, imprima seu dobro.

    const numeros = req.body.numeros

    const dobro = numeros.map((num) => num * 2)

    res.json({ dobro })
})


router.post('/ex15', function(req, res){
    
    //Escreva um script para ler 10 números. Todos os números lidos com valor inferior a 40 devem ser somados. Escreva o valor final da soma efetuada.

    const numeros = req.body.numeros
    
    const soma = numeros.reduce((acc, num) => (num < 40 ? acc + num : acc), 0)

    res.json({ soma })
})


router.post('/ex16', function(req, res){
    
    //Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um script que permita a entrada das seguintes informações:a) o número total de mercadorias no estoque;b) o valor de cada mercadoria. Ao final imprimir o valor total em estoque e a média de valor das mercadorias.

    const mercadorias = req.body.mercadorias
    const valores = req.body.valores

    const valorTotal = valores.reduce((acc, valor) => acc + valor, 0);
    const mediaValor = valorTotal / mercadorias;

    res.json({valorTotal, mediaValor})
})


router.post('/ex17', function(req, res){
    
    //Faça um script que gere e escreva os números ímpares dentro de um intervalo digitado pelo usuário. O script deve exibir também a soma destes números.

    const {inicio, fim} = req.body

    function gerarNumeros(inicio, fim){
        const numerosImpares = [];
        let somaImpares = 0;

        for(let i = inicio; i <= fim; i++){
            if(i % 2 !== 0){
                numerosImpares.push(i)
                somaImpares += i;
            }
        }
    }

    const resultado = gerarNumeros(inicio, fim)

    res.json({resultado})
})


router.post('/ex18', function(req, res){
    
    //Faça um programa que leia 30 valores inteiros e imprima: O maior valor lido; O menor valor lido; A média dos valores lidos.

    const numeros = req.body.numeros

    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > maior){
            maior = numeros[i]
        } if(valores[i] < menor){
            menor = numeros[i]
        }
        soma += numeros[i]
    }

    const media = soma / numeros.length;

    res.json(`O maior valor lido: ${maior}\nO menor valor lido: ${menor}\nA média dos valores lidos: ${media}`)
})


router.post('/ex19', function(req, res){
    
    //Um total de 500 alunos de uma universidade foram entrevistados. De cada um deles foram coletadas as seguintes informações: o código do curso que frequenta (1-sistemas de informação; 2-ciência da computação; 3-engenharia civil) e a idade. Faça um programa que processe estes dados e que forneça as seguintes informações: Número de alunos por curso; Número de alunos com idade entre 20 e 25 anos, por curso; e Qual o curso com menor média de idade.

    const alunos = req.body.alunos;

    let contagemCursos = [0, 0, 0];
    let contagemIdade = [0, 0, 0];
    let somaIdades = [0, 0, 0];

    for (let aluno of alunos) {
        const curso = aluno.curso - 1;
        const idade = aluno.idade;

        contagemCursos[curso]++;
        somaIdades[curso] += idade;

        if (idade >= 20 && idade <= 25) {
            contagemIdade[curso]++;
        }
    }

    let menorMediaIdade = 0;
    let menorMediaIdadeCurso = 1;
    for (let i = 0; i < 3; i++) {
        const mediaIdade = somaIdades[i] / contagemCursos[i];
        if (i === 0 || mediaIdade < menorMediaIdade) {
            menorMediaIdade = mediaIdade;
            menorMediaIdadeCurso = i + 1;
        }
    }

    res.json(`Número de alunos por curso: ${contagemCursos} Número de alunos com idade entre 20 e 25 anos, por curso: ${contagemIdade} Curso com menor média de idade: ${menorMediaIdadeCurso}`)
})


router.post('/ex20', function(req, res){
    
    //Faça um programa que imprima uma tabuada para os números de 1 a 10.

    for (let i = 1; i <= 10; i++) {
        resultado += `Tabuada do ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
        resultado += '\n';
    }

    res.json({resultado})
})


router.post('/ex21', function(req, res){
    
    //Foi realizada uma pesquisa de opinião com 200 pessoas que assistiram a uma peça de teatro. Cada espectador respondeu a um questionário que solicitava os seguintes dados: Idade da pessoa; nome da pessoa; Nota dada à peça (de 0 a 10). Faça um programa que, a partir destes dados, calcule e imprima: a. A quantidade de respostas 10. b. A média de idade das pessoas que responderam o questionário. c. A percentagem de pessoas que responderam 5 ou menos para a nota da peça. d. O nome da pessoa mais velha. Obs.: Considere que a maior idade não é repetida.

    const espectadores = req.body.espectadores

    let respostas10 = 0;
    let somaIdades = 0;
    let respostas5ouMenos = 0;
    let maisVelho = espectadores[0];

    for (let espectador of espectadores) {
        const idade = espectador.idade;
        const nota = espectador.nota;

        somaIdades += idade;

        if (nota === 10) {
            respostas10++;
        }

        if (nota <= 5) {
            respostas5ouMenos++;
        }

        if (idade > maisVelho.idade) {
            maisVelho = espectador;
        }
    }

    const mediaIdade = somaIdades / espectadores.length;
    const percentagem5ouMenos = (respostas5ouMenos / espectadores.length) * 100;

    res.json(`a. A quantidade de respostas 10: ${respostas10} b. A média de idade das pessoas que responderam o questionário: ${mediaIdade}\nc. A percentagem de pessoas que responderam 5 ou menos para a nota da peça: ${percentagem5ouMenos}% d. O nome da pessoa mais velha: ${maisVelho.nome}`)
})

router.post('/ex22', function(req, res){
    
    //Faça um script para ler o código e o preço de 15 produtos, calcular e escrever: O maior preço lido; e A média aritmética dos preços dos produtos.
    
    const produtos = req.body.produtos

    let maiorPreco = produtos[0].preco;
    let somaPreco = 0;

    for (let produto of produtos) {
        if (produto.preco > maiorPreco) {
            maiorPreco = produto.preco;
        }
        somaPreco += produto.preco;
    }

    let mediaPreco = somaPreco / produtos.length;

    res.json(`O maior preço lido: ${maiorPreco} A média aritmética dos preços dos produtos: ${mediaPreco}`);
})