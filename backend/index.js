const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/bd')

app.db = db

//acessando arquivos atras do consign...
consign()
    .then('./config/middleweres.js')
    .then('./api')
    .then('./config/router.js')
    .into(app)

app.listen(3000,()=>{
    console.log("Servidor executando...")
})