const db = require('../model');
const { bookEnums } = require('../enums/enums.index');

const BorrowedBook = db.borrowedBook;

 
exports.borrowBook = async (borrow) => {
	try {
		return await BorrowedBook.create(borrow);
	} catch (error) {
		throw error;
	}
};

 
exports.updateById = async (borrow) => {
	try {
		return await BorrowedBook.update(borrow, { where: { id: borrow.id } });
	} catch (error) {
		throw error;
	}
};

 
exports.getBorrowedBook = async (bookId) => {
	try {
		return await BorrowedBook.findOne({
			where: { bookId: bookId, state: bookEnums.BookState.BORROWED }
		});
	} catch (error) {
		throw error;
	}
};

 
exports.getBorrowedsByBookId = async (bookId) => {
	try {
		return await BorrowedBook.findAll({
			where: { bookId: bookId }
		});
	} catch (error) {
		throw error;
	}
};

 
exports.getBorrowHistoriesByUserId = async (userId) => {
	try {
		return await BorrowedBook.findOne({
			where: { userId: userId}
		});
	} catch (error) {
		throw error;
	}
};
