module.exports = {
	makeParams: (newEmail, tableName) => {

		const email = newEmail;
		const table = tableName;
		const params = {
			TableName: table,
			Item: {
			email: email,
		}
		}
	return params
	},
}