const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    try {
        const { originType } = req.body;
        
        // Se for marketplace, o status nasce como "pendente" para você aprovar
        const initialStatus = originType === 'marketplace' ? 'pendente' : 'ativo';

        const newProduct = new Product({
            ...req.body,
            status: initialStatus
        });

        await newProduct.save();
        res.status(201).json({ message: 'Produto criado!', product: newProduct });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        // Retorna apenas produtos ativos (aprovados)
        const products = await Product.find({ status: 'ativo' });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Função para ver produtos pendentes (Painel Admin)
exports.getPendings = async (req, res) => {
    try {
        const products = await Product.find({ status: 'pendente' });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
