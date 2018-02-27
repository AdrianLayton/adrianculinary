module.exports = {
	makeParams: (userEntry, tableName) => {
		let emailEntry = userEntry.email;

		let table = tableName;
		let params = {
			Table: table,
			Item: {
			email: emailEntry,
		}
		}
		return params;
	},
}