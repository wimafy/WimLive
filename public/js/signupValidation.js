function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function signupValidation(){
	//check username
	//password check done in different script
	
	//email checking
	var email = document.getElementById('email');
	var emailString = document.getElementById('email').value;
	var message = document.getElementById('emailMessage');
	
	var goodColor = "#66cc66";
	var badColor = "#aaaaaa";
	if (validateEmail(emailString))
	{
		email.style.background = goodColor;
		message.innerHTML = "";
	}
	else 
	{
		email.style.background = badColor;
		message.style.color = badColor;
		message.innerHTML = "Please enter a valid email.";
	}
	return false;
}