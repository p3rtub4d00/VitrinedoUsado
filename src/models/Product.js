const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, enum: ['celular', 'notebook', 'game', 'acessorio'], required: true },
    
    // AQUI ESTÁ A LÓGICA HÍBRIDA
    originType: { 
        type: String, 
        enum: ['proprio', 'consignacao', 'marketplace'], 
        required: true 
    },

    // Estado do produto (Grading)
    condition: {
        type: String,
        enum: ['novo', 'grade_a', 'grade_b', 'grade_c', 'defeito'],
        required: true
    },

    // Para Marketplace e Consignação, precisamos saber quem é o dono real
    sellerId: { type: String, required: false, default: 'LOJA_OFICIAL' }, // Em um sistema real, seria um ObjectId do Usuario

    // Status de aprovação (Marketplace precisa de aprovação antes de ir pro ar)
    status: {
        type: String,
        enum: ['ativo', 'pendente', 'vendido'],
        default: 'ativo'
    },

    imageUrl: { type: String, default: 'https://via.placeholder.com/150' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
