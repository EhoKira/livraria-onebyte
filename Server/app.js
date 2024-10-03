const express = require('express')
const rotaLivro = require("./rotas/livro")
const rotaFavorito = require("./rotas/favorito")
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

app.use(cors({origin: "*"}))

mongoose.connect('mongodb://localhost:27017/livrariaonebyte', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conectado ao MongoDB");
}).catch((error) => {
  console.error("Erro ao conectar ao MongoDB:", error);
});

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})