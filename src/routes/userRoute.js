const { userController, borrowController } = require('../controller/controller.index');
const { requestUtil } = require('../utils/utils.index');
const { apiResponse, validate } = require('../middlewares/middlewares.index');
const { userValidation } = require('../validations/validations.index');

exports.assignRoutes = app => {
	/**
	 * Create User
	 */
	app.post(
		requestUtil.getUrlPrefix('users'),
		validate(userValidation.createUser),
		userController.createUser,
		apiResponse.send
	);

	/**
	 * Get All Users
	 */
	app.get(
		requestUtil.getUrlPrefix('users'),
		userController.getAllUsers,
		apiResponse.send
	);

	/**
	 * Get User
	 */
	app.get(
		requestUtil.getUrlPrefix('users/:id'),
		validate(userValidation.getUser),
		userController.getUser,
		apiResponse.send
	);

	/**
	 * Borrow Book
	 */
	app.post(
		requestUtil.getUrlPrefix('users/:userId/borrow/:bookId'),
		validate(userValidation.borrowBook),
		borrowController.borrowBook,
		apiResponse.send
	);

	/**
	 * Return Book
	 */
	app.post(
		requestUtil.getUrlPrefix('users/:userId/return/:bookId'),
		validate(userValidation.borrowBook),
		borrowController.returnBook,
		apiResponse.send
	);
};



