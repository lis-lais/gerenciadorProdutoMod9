const produtoRepository = require('../repositories/produtoRepository');

const createProduto = async (data) => {
    if (!data.name || !data.category || !data.price || !data.stock) {
        throw new Error('Todos os campos são obrigatórios.');
    }
    return await produtoRepository.createProduto(data);
};

const findAllProduto = async () => {
    return await produtoRepository.findAllProduto();
};

const findById = async (id) => {
    if (!id) {
        throw new Error('ID é obrigatório.');
    }
    return await produtoRepository.findById(id);
};

const updateById = async (id, data) => {
    if (!id ||!data) {
        throw new Error('ID e dados são obrigatórios.');
    }
    return await produtoRepository.updateById(id, data);
};

const deleteById = async (id) => {
    if (!id) {
        throw new Error('ID é obrigatório.');
    }
    return await produtoRepository.deleteById(id);
};

const searchProduto = async (filters) => {
    if (Object.keys(filters).length === 0) {
        throw new Error('Filtros são obrigatórios.');
    }
    return await produtoRepository.searchProduto(filters);
};

module.exports = {
    createProduto,
    findAllProduto,
    findById,
    updateById,
    deleteById,
    searchProduto,
};