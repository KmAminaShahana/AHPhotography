

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
			
			/*
			$(".submit-form").click(function () {
				window.alert("Form is submitted successfully");
				});
			*/
		
			
			
			// Adding the submit event Listener

			function validateForm(){
				
				var name = document.forms.RegForm.Name.value;
				var email = document.forms.RegForm.Email.value;
				var phone = document.forms.RegForm.Phone.value;
				var details = document.forms.RegForm.Details.value;
				var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
				var regPhone=/^\d{10}$/;									 // Javascript reGex for Phone Number validation.
				var regName = /\d+$/g;								 // Javascript reGex for Name validation

				if (name == "" || regName.test(name)) {
					window.alert("Please enter your name properly.");
					name.focus();
					return false;
				}

				if (details == "") {
					window.alert("Please enter your details");
					address.focus();
					return false;
				}
				
				if (email == "" || !regEmail.test(email)) {
					window.alert("Please enter a valid e-mail address.");
					email.focus();
					return false;
				}
				
				if (phone == "" || !regPhone.test(phone) || phone.length <10) {
					alert("Please enter valid phone number.");
					phone.focus();
					return false;
				}

				return true;

			}
			
		});