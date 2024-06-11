const PORT = 3000

import app from './src/app.js'

//escutar a porta 300
app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
