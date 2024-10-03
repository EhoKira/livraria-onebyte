const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  nome: { type: String, required: true }
});

const Livro = mongoose.model('livros', livroSchema);

module.exports = Livro;
