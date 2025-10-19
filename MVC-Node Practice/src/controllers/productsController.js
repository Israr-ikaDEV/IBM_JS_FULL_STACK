const products = require('../data/productsData');

// ✅ Get all products
exports.getAllProducts = (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'List of all products',
            data: products
        }); 
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            data: {}
        });
    }}


// ✅ Get product by ID
exports.getProductById = (req, res) => {
    try {
        const { id } = req.params;
        const product = products.find(p => p.id === parseInt(id));

        if (!product) {
            return res.status(404).json({
                status: 'fail',
                message: `Product with ID ${id} not found`,
                data: {}
            });
        }

        res.status(200).json({
            status: 'success',
            message: `Details of product with ID: ${id}`,
            data: product
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            data: {}
        });
    }
};
// ✅ Create new product
exports.createProduct = (req, res) => {
    try {
        const productData = req.body;

        // Auto-generate new ID
        const newProduct = { id: products.length + 1, ...productData };
        products.push(newProduct);

        res.status(201).json({
            status: 'success',
            message: 'Product created successfully',
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            data: {}
        });
    }

};


// ✅ Update product by ID
exports.updateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;

        const productIndex = products.findIndex(p => p.id === parseInt(id));

        if (productIndex === -1) {
            return res.status(404).json({
                status: 'fail',
                message: `Product with ID ${id} not found`,
                data: {}
            });
        }

        products[productIndex] = { id: parseInt(id), ...productData };

        res.status(200).json({
            status: 'success',
            message: `Product with ID ${id} updated successfully`,
            data: products[productIndex]
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            data: {}
        });
    }
};
// ✅ Delete product by ID
exports.deleteProduct = (req, res) => {
    try {
        const { id } = req.params;
        const productIndex = products.findIndex(p => p.id === parseInt(id));

        if (productIndex === -1) {
            return res.status(404).json({
                status: 'fail',
                message: `Product with ID ${id} not found`,
                data: {}
            });
        }

        products.splice(productIndex, 1);

        res.status(204).json({
            status: 'success',
            message: `Product with ID ${id} deleted successfully`,
            data: null
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            data: {}
        });
    }
};
