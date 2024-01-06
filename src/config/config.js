const dotenv = require('dotenv');

dotenv.config();

exports.config = {
	db_config: {
		HOST: process.env.DB_HOST,
		USER: process.env.DB_USER,
		PASSWORD: process.env.DB_PASSWORD,
		DB: process.env.DB_NAME,
		dialect: process.env.DB_DIALECT,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	},
	api_config: {
		api_host: process.env.API_HOST,
		api_port: process.env.API_PORT,
		api_base_url: process.env.API_BASE_URL
	},


};
