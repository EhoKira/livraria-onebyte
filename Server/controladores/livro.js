function getLivros(req, res) {
    try{
        res.send('Seja Bem-Vindo à Livraria OneByte')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}