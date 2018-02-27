module.exports = {
	makeParams: (userEntry, tableName) => {
		const emailEntry = userEntry.email;

		const table = tableName;
		const params = {
			TableName: table,
			Item: {
			email: emailEntry,
		}
		}
	return params
	},
}