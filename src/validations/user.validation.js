const Joi = require('joi')
	.extend(require('@joi/date'));

const createUser = {

	body: Joi.object()
		.keys({
			name: Joi.string(),
		})
};

const getUser = {
	params: Joi.object().keys({
		id: Joi.string()
			.required()
	})
};

const borrowBook = {
	params: Joi.object().keys({
		userId: Joi.string()
			.required(),

		bookId: Joi.string()
			.required()
	})
};


module.exports = {
	createUser,
	getUser,
	borrowBook
};
