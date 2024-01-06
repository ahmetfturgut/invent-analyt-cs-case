 

const { config } = require('../config/config.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.db_config.DB, config.db_config.USER, config.db_config.PASSWORD, {
  host: config.db_config.HOST,
  dialect: config.db_config.dialect,

  pool: {
    max: config.db_config.pool.max,
    min: config.db_config.pool.min,
    acquire: config.db_config.pool.acquire,
    idle: config.db_config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require('./user.js')(sequelize, Sequelize);
db.book = require('./book.js')(sequelize, Sequelize);
db.borrowedBook = require('./borrowedbooks.js')(sequelize, Sequelize);
 
// User - BorrowedBook 
db.user.hasMany(db.borrowedBook, { foreignKey: 'userId' });
db.borrowedBook.belongsTo(db.user, { foreignKey: 'userId' });

// Book - BorrowedBook 
db.book.hasMany(db.borrowedBook, { foreignKey: 'bookId' });
db.borrowedBook.belongsTo(db.book, { foreignKey: 'bookId' });

module.exports = db;