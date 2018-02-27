module.exports = {
	makeParams: (userEntry, tableName) => {
		const emailEntry = userEntry.email;

		const table = tableName;
		const params = {
			Table: table,
			Item: {
			email: emailEntry,
		}
		}
	return params
	},
}