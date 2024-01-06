const { bookRepository } = require('../repository/repository.index');

/**
 * @description Create Book
 * @param book {object} Object containing all required fields to
 * create book
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean}>}
 * {success: false, error: any} or {success: true}
 */
exports.createBook = async (book) => {
	try {
		await bookRepository.createBook(book);
		return { success: true };
	} catch (error) {
		throw { success: false, error: error };
	}
};

/**
 * @description Gets the all books
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean, data: [*]}>}
 * {success: false, error: any} or {success: true, data: [books]}
 */
exports.getAllBooks = async () => {
	try {
		const books = await bookRepository.getAllBooks();

		return { success: true, data: books };
	} catch (error) {
		throw { success: false, error: any };
	}
};

/**
 * @description Gets book by id
 * @param id {property} Book Id
 * @returns {Promise<{success: boolean, error: *} | {success: boolean, data: book}>}
 * {success: false, error: any} or {success: true, data: {book}}
 */
exports.getBook = async id => {
	try {
		const book = await bookRepository.getBook(id);

		return { success: true, data: book };
	} catch (error) {
		throw { success: false, error: any };
	}
};
