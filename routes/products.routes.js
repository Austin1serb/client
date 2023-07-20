const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/', ProductController.index);
    app.get('/products/:id', ProductController.getProduct);
    app.get('/products', ProductController.getAllProducts);
    app.post('/products', ProductController.createProduct);
}
