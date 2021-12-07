const Product = require('../models/productManager.model')

module.exports.findAllProducts = (req, res) => {
    Product.find({})
    .then((allProducts) => {
        res.json(allProducts);
    })
    .catch((err)=> res.status(400).json({errMessage: err}));
}

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}