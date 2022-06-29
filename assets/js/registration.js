let user_Login = "";
let pass_Login = "";
let mail_Login = "";
$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

function validateLoginForm() {
	let login_Data = JSON.parse(localStorage.getItem("UserData"));

	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else if((name == login_Data.user_Login || name == login_Data.mail_Login) && password == login_Data.pass_Login) {
		
		alert("You Are Welcomed !! ☻ ☻");
		localStorage.setItem("Status",true);
		return false;
	}
	else {
		alert("please enter corret Data");
		return true;
	}
	}

function validateSignupForm() {
	var mail = document.getElementById("signEmail").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		let user = {
		user_Login : name,
		mail_Login : mail,
		pass_Login : password
	}
	let userData = JSON.stringify(user);
		localStorage.setItem("UserData",userData);
		alert("Successfully signed up");
		return true;
	}
}