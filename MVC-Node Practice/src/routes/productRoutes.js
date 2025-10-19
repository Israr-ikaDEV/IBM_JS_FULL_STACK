const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', (req, res) => {
    res.send('Product Route is working!');
});

// ✅ Get all products
router.get('/all', productsController.getAllProducts);

// ✅ Get product by ID
router.get('/:id', productsController.getProductById);

// ✅ Create new product
router.post('/new', productsController.createProduct);

// ✅ Update product by ID
router.put('/update/:id', productsController.updateProduct);

// ✅ Delete product by ID
router.delete('/delete/:id', productsController.deleteProduct);

module.exports = router;
