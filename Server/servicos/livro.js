const fs = require("fs")
const Livro = require("../models/livroModel")

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("Livro") )
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("Livro"))

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("Livro"))

    const novaListaDeLivros = [ ...livros, livroNovo ]

    fs.writeFileSync("Livro", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("Livro"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("Livro"))

    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("Livro", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivroPorId
}