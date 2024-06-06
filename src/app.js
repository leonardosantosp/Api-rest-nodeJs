const express = require('express')
const app = express()
const port = 3000

//rota padrão
app.get('/', (req, res) => {
  res.send('Olá Mundo')
})

//escutar a porta 300
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`)
})
