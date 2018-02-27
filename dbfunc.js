module.exports = {
	makeParams: (userEntry, tableName) => {
		const emailEntry = userEntry.email;

		const tableName = tableName;
		const params = {
			Table: table,
			Item: {
			email: emailEntry,
		}
		}
	return params
	},
}