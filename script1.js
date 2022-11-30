

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
			
			
		
			
			/*
			$(".submit-form").click(function () {
				window.alert("Form is submitted successfully");
				});
			*/
		
			
			
			// Adding the submit event Listener

			
			
		});