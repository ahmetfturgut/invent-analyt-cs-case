const Status = require('http-status');
const { userService, borrowService } = require('../service/service.index');


exports.createUser = async (req, res, next) => {
	try {
		let user = {
			name: req.body.name,
		}
		const result = await userService.createUser(user);

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

exports.getAllUsers = async (req, res, next) => {
	try {
		const result = await userService.getAllUsers();

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

exports.getUser = async (req, res, next) => {
	try {
		const result = await userService.getUser(req.params.id);

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
 