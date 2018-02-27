module.exports = {
	makeParams: (userEntry, tableName) => {


		const table = tableName;
		const params = {
			TableName: table,
			Item: {
			email: userEntry.email,
		}
		}
	return params
	},
}