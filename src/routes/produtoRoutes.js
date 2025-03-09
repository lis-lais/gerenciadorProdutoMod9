const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/', produtoController.createProduto);
router.get('/', produtoController.findAllProdutos);
router.get('/:id', produtoController.findById);
router.put('/:id', produtoController.updateById);
router.delete('/:id', produtoController.deleteById);
router.get('/search', produtoController.searchProdutos);

module.exports = router;
