const bcrypt = require('bcryptjs');

const generateUserPassword = (password) => bcrypt.hashSync(password, 10);

const comparePasswords = (password, cryptedPassword) => 
    bcrypt.compareSync(password, cryptedPassword);

module.exports = { generateUserPassword, comparePasswords };

