exports.send = (req, res) => {
	const { status, success, data, message ,code} = res.apiResponse;

	return res.status(status).json({
		success,
		code: code | '',
		msg: message || '',
		users: data || ''
	});
};
