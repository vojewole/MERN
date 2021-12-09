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

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id }) 
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => response.json(err))
}