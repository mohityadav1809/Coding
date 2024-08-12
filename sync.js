// sync.js
const sequelize = require('./dbconfig/database');
const User = require('./models/user');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: false }); // force: true will drop the table if it already exists
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

syncDatabase();
