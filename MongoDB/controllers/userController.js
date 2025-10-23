const { mongoose } = require('mongoose');
const User = require('../models/user');

// Create a new user    
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//get by id
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }   
    res.status(200).json({ user });
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//get by name
const getUserByName = async (req, res) => {
  const { name } = req.params;
  try {
    const user = await User.findOne({ name: name });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User fetched successfully', user });
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}; 

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  getUserByName 
};
 


