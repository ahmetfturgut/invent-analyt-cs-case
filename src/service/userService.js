const { userRepository, borrowRepository } = require('../repository/repository.index');
const { bookEnums } = require('../enums/enums.index');

/**
 * @description Create User
 * @param user {object} Object containing all required fields to
 * create user
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean}>}
 * {success: false, error: any} or {success: true}
 */
exports.createUser = async (user) => {
	try {
		await userRepository.createUser(user);
		return { success: true };
	} catch (error) {
		throw { success: false, error: error };
	}
};

/**
 * @description Gets the all users
 *
 * @returns {Promise<{success: boolean, error: *} | {success: boolean, data: [*]}>}
 * {success: false, error: any} or {success: true, data: [users]}
 */
exports.getAllUsers = async () => {
	try {
		const users = await userRepository.getAllUsers();

		return { success: true, data: users };
	} catch (error) {
		throw { success: false, error: error };
	}
};

 
exports.getUser = async id => {
	try {
		let user = await userRepository.getUser(id);
		if (!user) {
			return { success: true, data: {} };
		}

		const borrowHistories = {
			past: [],
			present: []
		};

		user.borrowedBooks.forEach(borrowedBook => {
			const bookInfo = {
				name: borrowedBook.book.name
			};
			if (borrowedBook.state == bookEnums.BookState.RETURNED) {
				bookInfo.userScore = borrowedBook.userScore;
				borrowHistories.past.push(bookInfo);
			} else if (borrowedBook.state == bookEnums.BookState.BORROWED) {
				borrowHistories.present.push(bookInfo);
			}
		});

		let response = {
			id: user.id,
			name: user.name,
			books: borrowHistories
		};

		return { success: true, data: response };
	} catch (error) {
		throw { success: false, error: error };
	}
};

