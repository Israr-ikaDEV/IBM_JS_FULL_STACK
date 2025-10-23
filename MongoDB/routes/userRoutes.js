const express = require('express');
const User = require('../models/user');
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,getUserByName
} = require('../controllers/userController');

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.get('/users/name/:name', getUserByName);

module.exports = router;
