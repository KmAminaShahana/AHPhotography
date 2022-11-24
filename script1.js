function checkPhone(){
	phonenum=document.getElementById("phone").value
	console.log(phonenum.isInteger)
	if(phonenum.isInteger) {
		return true;
	}
	else{
		return false;
	}
}

$(document).ready(function(){
			
	var checkout = $('#date-picker').datepicker({
		beforeShowDay: function(date) {
		  if (!checkin.datepicker("getDate").valueOf()) {
			return date.valueOf() >= new Date().valueOf();
		  } else {
			return date.valueOf() > checkin.datepicker("getDate").valueOf();
		  }
		},
		autoclose: true
	  
	  }).on('changeDate', function(ev) {});
			
			
		$(".reset-form").click(function () {
			window.alert("Form is reset successfully");
		});

		
		const phoneInputField = document.querySelector("#phone");
		const phoneInput = window.intlTelInput(phoneInputField, {
		  utilsScript:
			"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
		});
	  
			
			/*
			$(".submit-form").click(function () {
				window.alert("Form is submitted successfully");
				});
			*/
		
			
			let id = (id) => document.getElementById(id);
			let form = id("contact-form"),
				uname = id("uname"),
				email = id("email"),
				phone = id("phone"),
				//date = id("date"),
				duration = id("duration"),

			  errorMsg = document.getElementsByClassName("error"),
			  successIcon = document.getElementsByClassName("success-icon"),
			  failureIcon = document.getElementsByClassName("failure-icon");
			
			// Adding the submit event Listener

			form.addEventListener("submit", (e) => {
			  e.preventDefault();
			  engine(uname, 0, "Name cannot be blank");
			  engine(email, 1, "Email cannot be blank");
			  engine(phone, 2, "Phone Number cannot be blank");
			  //engine(date, 3, "Date cannot be blank");
			  engine(duration,4,"Duration cannot be blank");

			function engine(id, serial, message) {
					if (id.value.trim() === "") {
						errorMsg[serial].innerHTML = message;
						id.style.border = "2px solid red";

						// icons
						failureIcon[serial].style.opacity = "1";
						successIcon[serial].style.opacity = "0";
					} else {
						if (id==email){
							let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
							let user_mail = $("#email").val();
							if(user_mail.match(res)) {
								errorMsg[serial].innerHTML="";
								id.style.border = "2px solid green";
								
								failureIcon[serial].style.opacity = "0";
								successIcon[serial].style.opacity = "1";
							}
							else {
								errorMsg[serial].innerHTML = "Enter valid email";
								id.style.border = "2px solid red";
								
								failureIcon[serial].style.opacity = "1";
								successIcon[serial].style.opacity = "0";
							}
						}
						else if(id==phone){
							let num = parseInt(id.value.trim());
							if(num.toString().length != 10 || Number.isInteger(num)==false){
								errorMsg[serial].innerHTML = "Enter valid Phone Number";
								id.style.border = "2px solid red";
								
								failureIcon[serial].style.opacity = "1";
								successIcon[serial].style.opacity = "0";
							}
							else{
								errorMsg[serial].innerHTML="";
								id.style.border = "2px solid green";
								
								failureIcon[serial].style.opacity = "0";
								successIcon[serial].style.opacity = "1";
							}
						}
						else{
							errorMsg[serial].innerHTML = "";
							id.style.border = "2px solid green";

						// icons
							failureIcon[serial].style.opacity = "0";
							successIcon[serial].style.opacity = "1";
						}
						
					}
				}

			});

			
		});