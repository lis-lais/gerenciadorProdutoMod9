require('dotenv').config();  //importa o módulo dotenv 

const mongoose = require('mongoose'); //conexão e manipulação de dados no MongoDB
const express = require('express'); //cria servidor web
const router = require('./src/routes/produtoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//conexão com banco de dados
mongoose.connect(process.env.MONGODB_URL);

//verificação da conexão com o banco de dados
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

//tratamento de erros na conexão de dados
mongoose.connection?.once('error', (err) => {
    console.error('Failed to connect to MongoDB:', err);
});

app.use("/produtos", router);

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send({ error: 'Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});