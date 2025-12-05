const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rota para criar produto
router.post('/', productController.createProduct);

// Rota para listar todos
router.get('/', productController.getAllProducts);

// Rota administrativa (tem que vir antes do /:id)
router.get('/admin/pendentes', productController.getPendings);

// Rota para pegar UM produto (Detalhes)
router.get('/:id', productController.getProductById);

module.exports = router;
