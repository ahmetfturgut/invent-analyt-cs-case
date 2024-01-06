const db = require('../model');
const User = db.user;
const BorrowedBook = db.borrowedBook;

/**
 * @description Create User
 * @param user {object} Object containing all required fields to
 * create user
 */
exports.createUser = async (user) => {
	try {
		return await User.create(user);
	} catch (error) {
		throw error;
	}
};


/**
 * @description Gets the all users
 *
 * @returns {Promise<[{users}]>}
 * user(id,name) object array
 */
exports.getAllUsers = async () => {
	try {
		return User.findAll({
			attributes: ['id', 'name'],
		});
	} catch (error) {
		throw error;
	}
};


/**
 * @description Get the user
 * @param id {property} User Id
 * @returns {Promise<[{user}]>}
 * user with borrowedBook,book object
 */
exports.getUser = async id => {
	try {
		return await User.findOne({
			where: { id },
			include: [{
				model: db.borrowedBook,
				include: [{
					model: db.book
				}],
				required: false
			}]
		});
	} catch (error) {
		throw error;
	}
};


/**
 * @description Exits the user
 * @param id {property} User Id
 * @returns {Promise<[{user}]>}
 * user boolean
 */
exports.isExistUser = async id => {
	try {
		const user = User.findByPk(id);
		if (user) {
			return true;
		}
		return false;
	} catch (error) {
		throw error;
	}
};
