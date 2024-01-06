module.exports = (sequelize, Sequelize) => {
	const Book = sequelize.define("books", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		score: {
			type: Sequelize.DOUBLE,
			defaultValue: 0 
		},
	});

	return Book;
};