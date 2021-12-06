const ProductController = require('../controllers/productManager.controller')

module.exports = app => {
    app.get('/api/product', ProductController.findAllProducts);
    app.post('/api/product', ProductController.createProduct);
}

