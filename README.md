# Livraria OneByte

## Descrição do Projeto
O projeto Livraria Onebyte é uma aplicação web para gerenciamento de livros voltados à área de ciência da computação. A plataforma permite a visualização e gerenciamento de livros e um sistema de favoritos, integrando um backend robusto com Node.js e MongoDB. O frontend foi desenvolvido em React, proporcionando uma interface simples e intuitiva para os usuários interagirem com o sistema.

## Demonstração em Vídeo
Veja uma demonstração do projeto funcionando [assista no youtube](https://youtu.be/Ai6XdfarMcU)

## Funcionalidades
- Cadastro de Livros: Adicione livros no banco de dados.
- Listagem de Livros: Visualize todos os livros disponíveis.
- Favoritos: Adicione e gerencie seus livros favoritos.
- Remover Favoritos: Remova livros da sua lista de favoritos.
- Integração com MongoDB: Todas as informações são salvas e recuperadas de um banco de dados MongoDB.

## Tecnologias Utilizadas
- Frontend: `React.js`
- Backend: `Node.js` com `Express`
- Banco de Dados: `MongoDB`
- Gerenciamento de Estado: `React Context API`
- Comunicação com Backend: `Axios`

## Banco de Dados
O MongoDB foi escolhido para ser o banco de dados utilizado no projeto, por ser um banco de dados NoSQL altamente escalável e flexível, ideal para aplicações que necessitam de flexibilidade na modelagem de dados.

## Instruções de Configuração

### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento para rodar localmente:
- Node.js (v14+)
- MongoDB (localmente ou em um serviço na nuvem como MongoDB Atlas)
- NPM (gerenciador de pacotes do Node.js)

### Configuração do Backend
### Passo a Passo
1. Clone este repositório.
   ```bash
   git clone <repositorio-url>
   cd livraria-onebyte
   ```

2. Acesse a pasta do backend.
   ```bash
   cd Server
   ```

3. Instale as dependências.
   ```bash
   npm install
   npm install nodemon
   npm install cors
   npm install mongoose
   npm install express
   ```

4. Inicie o servidor.
   ```bash
   npx nodemon app.js
   ```

### Configuração do Frontend
### Passo a Passo
1. Acesse a pasta do frontend.
   ```bash
   cd Client
   ```

2. Instale as dependências.
   ```bash
   npm install
   ```
3. Inicie o Servidor.
   ```bash
   npm run start
   ```

### Executando o Projeto
1. Certifique-se de que o backend está rodando na `porta 5000` e o frontend na `porta 3000`.
2. Acesse `http://localhost:3000` no seu navegador para utilizar o sistema.

# Contribuir
Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades! Seu apoio é sempre bem-vindo para tornar a Livraria Onebyte ainda melhor.
