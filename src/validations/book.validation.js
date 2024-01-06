const Joi = require('joi')
	.extend(require('@joi/date'));

const createBook = {

	body: Joi.object()
		.keys({
			name: Joi.string(),
		})
};

const getBook = {
	params: Joi.object().keys({
		id: Joi.string()
			.required()
	})
};

module.exports = {
	createBook,
	getBook
};
