module.exports = {
	makeParams: (newEmail, tableName) => {


		const table = tableName;
		const params = {
			TableName: table,
			Item: {
			email: newEmail,
		}
		}
	return params
	},
}