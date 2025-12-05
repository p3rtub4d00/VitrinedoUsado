require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 3000;

// Conectar ao Banco antes de iniciar o servidor
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
});
