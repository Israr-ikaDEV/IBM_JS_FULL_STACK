// In-memory user storage
const users = [];

module.exports = {
  users,
  findById: (id) => users.find(user => user.id === id),
  findByEmail: (email) => users.find(user => user.email === email),
  create: (userData) => {
    const newUser = {
      id: users.length + 1,
      ...userData
    };
    users.push(newUser);
    return newUser;
  }
};