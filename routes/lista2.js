const express = require('express')
const router = express.Router()

router.post('/ex2', function(req, res){
    const{nome, horasTrabalhadas, valorhora, filhos} = req.body

    const salariobruto = horasTrabalhadas * valorhora
    const acrescimo = 3/100 * salariobruto * filhos
    const salariofinal = salariobruto + acrescimo
    
    res.json({salariofinal})
})

module.exports = router