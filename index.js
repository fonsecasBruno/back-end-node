const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

<<<<<<< HEAD
const routes = require('./routes/routes')
app.use('/', routes)
=======
const lista1 = require('./routes/lista1')
const lista2 = require('./routes/lista2')
const lista3 = require('./routes/lista3')

app.use('/lista1', lista1)
app.use('/lista2', lista2)
app.use('/lista3', lista3)
>>>>>>> 53d7b19e1a1a18b3fd82f65529728b226529f128

app.get('/', function(req, res){
    res.send('Rota Principal')
})

app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})

app.listen(3000, function(){
    console.log('Server UP port 3000')
})