const users = require('../data/usersData');

// ✅ Get all users
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'List of all users',
    data: users
  });
};

// ✅ Get user by ID
exports.getUserById = (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: `User with ID ${id} not found`,
        data: {}
      });
    }

    res.status(200).json({
      status: 'success',
      message: `Details of user with ID: ${id}`,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      data: {}
    });
  }
};

// ✅ Create new user
exports.createUser = (req, res) => {
  try {
    const userData = req.body;

    // Auto-generate new ID
    const newUser = { id: users.length + 1, ...userData };
    users.push(newUser);

    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data: newUser
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      data: {}
    });
  }
};

// ✅ Update user by ID
exports.updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const index = users.findIndex(u => u.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({
        status: 'fail',
        message: `User with ID ${id} not found`,
        data: {}
      });
    }

    // Update user info
    users[index] = { ...users[index], ...userData };

    res.status(200).json({
      status: 'success',
      message: `User with ID: ${id} updated successfully`,
      data: users[index]
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      data: {}
    });
  }
};

// ✅ Delete user by ID
exports.deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const index = users.findIndex(u => u.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({
        status: 'fail',
        message: `User with ID ${id} not found`,
        data: {}
      });
    }

    users.splice(index, 1); // Remove user

    res.status(200).json({
      status: 'success',
      message: `User with ID: ${id} deleted successfully`,
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
