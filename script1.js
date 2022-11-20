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
				whatsapp = id("whatsapp"),
				date = id("date"),
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
			  engine(whatsapp, 3, "Whatsapp Number cannot be blank");
			  engine(date,4,"Date cannot be blank");
			  engine(duration,5,"Duration cannot be blank");
			
			
			// engine function which will do all the works

			function engine(id, serial, message) {
					if (id.value.trim() === "") {
						errorMsg[serial].innerHTML = message;
						id.style.border = "2px solid red";

						// icons
						failureIcon[serial].style.opacity = "1";
						successIcon[serial].style.opacity = "0";
					} else {
						if(id==phone||id==whatsapp){
							let num = parseInt(id.value.trim());
							if(num.toString().length != 10 || Number.isInteger(num)==true){
								errorMsg[serial].innerHTML = "Enter valid Number";
								phone.style.border = "2px solid red";
								
								failureIcon[serial].style.opacity = "1";
								successIcon[serial].style.opacity = "0";
							}
							else{
								errorMsg[serial].innerHTML="";
								phone.style.border = "2px solid green";
								
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

				if(whatsapp.toString().length != 10){
                    errorMsg[3].innerHTML = "Enter valid Whatsapp number";
                }
                else{
					errorMsg[3].innerHTML;
					whatsapp.style.border = "2px solid green";
					
					failureIcon[serial].style.opacity = "0";
					successIcon[serial].style.opacity = "1";
				}
			});

			
		});	
/*
*/