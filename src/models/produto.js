const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true},
    price: { type: Number, required: true },
    stock: { type: Number, required: true},
});

modulo.exports = mongoose.model("Produto", produtoSchema);