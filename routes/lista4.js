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

    res.json({numeros})
})

module.exports = router