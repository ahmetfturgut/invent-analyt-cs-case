const Status = require('http-status');
const { borrowService } = require('../service/service.index');

exports.borrowBook = async (req, res, next) => {
	try {

		let borrowBookRequest = {
			userId: req.params.userId,
			bookId: req.params.bookId
		}

		const result = await borrowService.borrowBook(borrowBookRequest);

		if (!result.success) {
			res.apiResponse = {
				status: Status.NOT_ACCEPTABLE,
				success: result.success,
				message: result.error
			};
		} else {
			res.apiResponse = {
				status: Status.OK,
				success: result.success,
				error: result.error,
				data: result.data,
				message: 'Succesfull'
			};
		}

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

exports.returnBook = async (req, res, next) => {
	try {

		let returnBookRequest = {
			userId: req.params.userId,
			bookId: req.params.bookId,
			score:req.body.score
		}

		const result = await borrowService.returnBook(returnBookRequest);

		if (!result.success) {
			res.apiResponse = {
				status: Status.NOT_ACCEPTABLE,
				success: result.success,
				message: result.error
			};
		} else {
			res.apiResponse = {
				status: Status.OK,
				success: result.success,
				error: result.error,
				data: result.data,
				message: 'Succesfull'
			};
		}

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


