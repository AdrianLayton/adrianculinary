module.exports = {
	makeParams: (userEntry, tableName) => {
		const emailEntry = userEntry.email;

		const table = tableName;
	return const params = {
			Table: table,
			Item: {
			email: emailEntry,
		}
		}

	},
}