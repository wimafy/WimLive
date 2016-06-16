function checkPass()
{ 
	//Store the password field objects into variables ...
	var pass1 = document.getElementById('password');
	var pass2 = document.getElementById('password_confirmation');
	//Store the Confimation Message Object ...
	var checkMessage = document.getElementById('passwordMessage');
	//Set the colors we will be using ...
	var goodColor = "#66cc66";
	var badColor = "#aaaaaa";
	//Compare the values in the password field 
	//and the confirmation field
	if(pass1.value == "")
	{
		;
	}
	else if(pass1.value == pass2.value){
		//The passwords match. 
		//Set the color to the good color and inform
		//the user that they have entered the correct password 
		pass2.style.backgroundColor = goodColor;
		checkMessage.style.color = goodColor;
		checkMessage.innerHTML = "Passwords match!"
	}else{
		//The passwords do not match.
		//Set the color to the bad color and
		//notify the user.
		pass2.style.backgroundColor = badColor;
		checkMessage.style.color = badColor;
		checkMessage.innerHTML = "Passwords do not match!"
	}
}

function checkLength(){
	var pass1 = document.getElementById('password');
	var lengthMessage = document.getElementById('lengthMessage');
	
	var goodColor = "#66cc66";
	var badColor = "#aaaaaa";
	
	if(pass1.value.length < 8){
		pass1.style.backgroundColor = badColor;
		lengthMessage.style.color = badColor;
		lengthMessage.innerHTML = "Password is too short. Requires more than 8 characters.";
	}
	else{
		pass1.style.backgroundColor = goodColor;
		lengthMessage.innerHTML = "";
	}
}