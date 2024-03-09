const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const lista1 = require('./routes/lista1')
const lista2 = require('./routes/lista2')

app.use('/lista1', lista1)
app.use('/lista2', lista2)

app.get('/', function(req, res){
    res.send('Rota Principal')
})

app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})


app.post('/lista2/ex2', function(req, res){
    
    const{nome, horasTrabalhadas, valorhora, filhos} = req.body

    const salariobruto = horasTrabalhadas * valorhora
    const acrescimo = 3/100 * salariobruto * filhos
    const salariofinal = salariobruto + acrescimo
    
    res.json({salariofinal})


})

app.listen(3000, function(){
    console.log('Server UP port 3000')
})