const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rota para criar produto
router.post('/', productController.createProduct);

// Rota pública para listar produtos à venda
router.get('/', productController.getAllProducts);

// Rota administrativa para ver o que precisa aprovar (Marketplace)
router.get('/admin/pendentes', productController.getPendings);

module.exports = router;
