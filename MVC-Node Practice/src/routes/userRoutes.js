const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



// Sample user route
router.get('/', (req, res) => {
    res.send('User Route is working!');
});
router.get('/all', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.post('/new', userController.createUser);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);
module.exports = router;




