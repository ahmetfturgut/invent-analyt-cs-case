const { bookEnums } = require('../enums/enums.index');

module.exports = (sequelize, Sequelize) => {
	const BorrowedBook = sequelize.define("borrowedBooks", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		userId: {
			type: Sequelize.INTEGER,
			references: {
				model: 'users',
				key: 'id',
			}
		},
		bookId: {
			type: Sequelize.INTEGER,
			references: {
				model: 'books',
				key: 'id',
			}
		},
		userScore: {
			type: Sequelize.INTEGER,
			defaultValue: 0 
		},
		state: {
			type: Sequelize.ENUM,
			values: Object.values(bookEnums.BookState),
			defaultValue: bookEnums.BookState.BORROWED,
			allowNull: false
		}
	});

	return BorrowedBook;
};