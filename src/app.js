const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/products', productRoutes);

// Rota base para teste
app.get('/', (req, res) => {
    res.send('API de Eletrônicos Híbrida está rodando!');
});

module.exports = app;
