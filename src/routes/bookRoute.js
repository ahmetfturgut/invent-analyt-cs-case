const { bookController } = require('../controller/controller.index');
const { requestUtil } = require('../utils/utils.index');
const { apiResponse, validate } = require('../middlewares/middlewares.index');
const { bookValidation } = require('../validations/validations.index');

exports.assignRoutes = app => {
	/**
	 * Create Book
	 */
	app.post(
		requestUtil.getUrlPrefix('books'),
		validate(bookValidation.createBook),
		bookController.createBook,
		apiResponse.send
	);

	/**
	 * Get All Books
	 */
	app.get(
		requestUtil.getUrlPrefix('books'), 
		bookController.getAllBooks,
		apiResponse.send
	);

	/**
	 * Get Book
	 */
	app.get(
		requestUtil.getUrlPrefix('books/:id'),
		validate(bookValidation.getBook), 
		bookController.getBook,
		apiResponse.send
	);
};



