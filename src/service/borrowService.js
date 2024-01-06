const { borrowRepository, userRepository, bookRepository } = require('../repository/repository.index');
const { bookEnums } = require('../enums/enums.index');

 
exports.borrowBook = async (borrow) => {
	try {
		if (!await userRepository.isExistUser(borrow.userId)) {
			return { success: false, error: 'User not found' };
		}

		if (!await bookRepository.isExistBook(borrow.userId)) {
			return { success: false, error: 'Book not found' };
		}

		let borrowedBook = await borrowRepository.getBorrowedBook(borrow.bookId);
		if (borrowedBook) {
			return { success: false, error: 'This book not available' };
		}
		await borrowRepository.borrowBook(borrow);

		return { success: true };
	} catch (error) {
		throw { success: false, error: any };
	}
};

 
exports.returnBook = async (borrow) => {
	try {
		if (!await userRepository.isExistUser(borrow.userId)) {
			return { success: false, error: 'User not found' };
		}

		if (!await bookRepository.isExistBook(borrow.userId)) {
			return { success: false, error: 'Book not found' };
		}

		let borrowedBook = await borrowRepository.getBorrowedBook(borrow.bookId);
		if (!borrowedBook) {
			return { success: false, error: 'error transaction' };
		}

		await borrowRepository.updateById({
			id: borrowedBook.id,
			state: bookEnums.BookState.RETURNED,
			userScore:borrow.score
		});

	 
        const allBorrowedBooks = await borrowRepository.getBorrowedsByBookId(borrow.bookId);

        const totalScore = allBorrowedBooks.reduce((sum, book) => sum + book.userScore, 0);
        const averageScore = totalScore / allBorrowedBooks.length;

        await bookRepository.updateById({
            id: borrow.bookId,
            score: averageScore
        });

		return { success: true };
	} catch (error) {
		throw { success: false, error: any };
	}
};
