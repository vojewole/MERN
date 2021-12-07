const ProductController = require('../controllers/productManager.controller')

module.exports = app => {
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.post('/api/product', ProductController.createProduct);
}

