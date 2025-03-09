const produtoService = require('../services/produtoService');

const createProduto = async (req, res, next) => {
    try {
        const produto = await produtoService.createProduto(req.body);
        res.status(201).json(produto);
    } catch (error) {
        next(error);
    }
};

const findAllProdutos = async (req, res, next) => {
    try {
        const produtos = await produtoService.findAllProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        next(error);
    }
};

const findById = async (req, res, next) => {
    try {
        const produto = await produtoService.findById(req.params.id);
        if (!produto) return res.status(404).send('Produto não encontrado');
        res.status(200).json(produto);
    } catch (error) {
        next(error);
    }
};

const updateById = async (req, res, next) => {
    try {
        const produto = await produtoService.updateById(req.params.id, req.body);
        if (!produto) return res.status(404).send('Produto não encontrado');
        res.status(200).json(produto);
    } catch (error) {
        next(error);
    }
};

const deleteById = async (req, res, next) => {
    try {
        const deleteProduto = await produtoService.deleteById(req.params.id);
        if (!deleteProduto) return res.status(404).send('Produto não encontrado');
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

const searchProdutos = async (req, res, next) => {
    try {
        const filters = req.query;
        const produtos = await produtoService.searchProdutos(filters);
        res.status(200).json(produtos);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createProduto,
    findAllProdutos,
    findById,
    updateById,
    deleteById,
    searchProdutos,
};