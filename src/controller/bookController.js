const Status = require('http-status');
const { bookService } = require('../service/service.index');


exports.createBook = async (req, res, next) => {
	try {
		let book = {
			name: req.body.name,
		}
		const result = await bookService.createBook(book);

		res.apiResponse = {
			status: Status.OK,
			code: 0,
			message: 'Success',
			data: result.data,
		};
	} catch (error) {
		res.apiResponse = {
			status: Status.BAD_REQUEST,
			code: Status.BAD_REQUEST,
			message: error.message,
			data: null
		};
	}

	next();
};

exports.getAllBooks = async (req, res, next) => {
	try {
		const result = await bookService.getAllBooks();

		res.apiResponse = {
			status: Status.OK,
			success: result.success,
			error: result.error,
			data: result.data,
			message: 'Succesfull'
		};
	} catch (error) {
		res.apiResponse = {
			status: Status.BAD_REQUEST,
			success: false,
			error: error.message,
			data: null,
			message: 'Error'
		};
	}

	next();
};

exports.getBook = async (req, res, next) => {
	try {
		const result = await bookService.getBook(req.params.id);

		res.apiResponse = {
			status: Status.OK,
			success: result.success,
			error: result.error,
			data: result.data,
			message: 'Succesfull'
		};
	} catch (error) {
		res.apiResponse = {
			status: Status.BAD_REQUEST,
			success: false,
			error: error.message,
			data: null,
			message: 'Error'
		};
	}

	next();
};
