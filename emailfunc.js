module.exports = {
	validateEmail: (inputText) => {
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
		var form = document.form1; //Interchange
		if(inputText.value.match(mailformat)) {  
			form.submit();
		}  
		else {  
			invalidEmail(form1);  
			form.text1.focus(); 
		}  
		}
	invalidEmail: (emailForm) => {
		var emailForm = emailForm;
		var errDiv = document.createElement("DIV");
		var errMsg = document.createTextNode("Sorry that email was invalid");
		errDiv.appendChild(errMsg);
		errDiv.classList.add("error");
		emailForm.appendChild(errDiv);
	}
}