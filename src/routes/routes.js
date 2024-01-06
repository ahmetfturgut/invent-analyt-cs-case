const { userRoute, bookRoute } = require('./routes.index');

exports.assignRoutes = app => {
	userRoute.assignRoutes(app);
	bookRoute.assignRoutes(app);
};
