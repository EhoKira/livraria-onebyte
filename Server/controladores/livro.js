const Livro = require("../models/livroModel.js"); // Importando o modelo de Livro

async function getLivros(req, res) {
    try {
        const livros = await Livro.find(); // Busca todos os livros no MongoDB
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

async function getLivro(req, res) {
    try {
        const id = req.params.id;

        if (mongoose.Types.ObjectId.isValid(id)) {
            const livro = await Livro.findById(id); // Busca o livro pelo ID
            if (livro) {
                res.send(livro);
            } else {
                res.status(404);
                res.send("Livro não encontrado");
            }
        } else {
            res.status(422);
            res.send("ID inválido");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

async function postLivro(req, res) {
    try {
        const livroNovo = req.body;

        if (livroNovo.nome) {
            const novoLivro = new Livro(livroNovo); // Cria um novo livro com os dados recebidos
            await novoLivro.save(); // Salva o livro no MongoDB
            res.status(201).send("Livro inserido com sucesso!");
        } else {
            res.status(422).send("O campo nome é obrigatório!");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

async function patchLivro(req, res) {
    try {
        const id = req.params.id;

        if (mongoose.Types.ObjectId.isValid(id)) {
            const body = req.body;
            const livroAtualizado = await Livro.findByIdAndUpdate(id, body, { new: true }); // Atualiza o livro pelo ID
            if (livroAtualizado) {
                res.send("Item modificado com sucesso");
            } else {
                res.status(404).send("Livro não encontrado");
            }
        } else {
            res.status(422).send("ID inválido");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

async function deleteLivro(req, res) {
    try {
        const id = req.params.id;

        if (mongoose.Types.ObjectId.isValid(id)) {
            const livroDeletado = await Livro.findByIdAndDelete(id); // Deleta o livro pelo ID
            if (livroDeletado) {
                res.send("Livro deletado com sucesso");
            } else {
                res.status(404).send("Livro não encontrado");
            }
        } else {
            res.status(422).send("ID inválido");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
};
