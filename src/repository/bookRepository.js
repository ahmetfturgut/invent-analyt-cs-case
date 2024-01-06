const db = require('../model');
const Book = db.book;

 
exports.createBook = async (book) => {
	try {
		return await Book.create(book);
	} catch (error) {
		throw error;
	}
};

 
exports.getAllBooks = async () => {
	try {
		return Book.findAll({
			attributes: ['id', 'name'],
		});
	} catch (error) {
		throw error;
	}
};

 
exports.getBook = async id => {
	try {
		return Book.findByPk(id,{
			attributes: ['id', 'name', "score"],
		});
	} catch (error) {
		throw error;
	}
};

 
exports.isExistBook = async id => {
	try {
		const book = Book.findByPk(id);
		if (book) {
			return true;
		}
		return false;
	} catch (error) {
		throw error;
	}
};

 
exports.updateById = async (book) => {
	try {
		return await Book.update(book, { where: { id: book.id } });
	} catch (error) {
		throw error;
	}
};
