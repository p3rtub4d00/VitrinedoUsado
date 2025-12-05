const express = require('express');
const cors = require('cors');
const path = require('path'); // <--- 1. Importe isso
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// <--- 2. Adicione esta linha para servir os arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '../public')));

// Rotas da API
app.use('/api/products', productRoutes);

// <--- 3. Mude a rota raiz para entregar o index.html em vez da mensagem de texto
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
