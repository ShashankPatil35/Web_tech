const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  };


  const comparePasswords = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
  };
  
  module.exports = {
    hashPassword,
    comparePasswords,
  };