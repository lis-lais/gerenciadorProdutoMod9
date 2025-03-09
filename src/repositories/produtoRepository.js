const Produto = require('../models/produto');

const createProduto = async (produtoData) => 
    await Produto.create(produtoData);

const findAllProduto = async () => 
    await Produto.find();

const findById = async (id) => 
    await Produto.findById(id);

const updateById = async (id, produtoData) => 
    await Produto.findByIdAndUpdate(id, produtoData, { new: true });

const deleteById = async (id) => 
    await Produto.findByIdAndDelete(id);

const searchProduto = async (filters) => 
    await Produto.find(filters);

module.exports = {
    createProduto,
    findAllProduto,
    findById,
    updateById,
    deleteById,
    searchProduto,  
};
