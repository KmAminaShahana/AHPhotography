
$(window).on("load",function(){
	$(".load-div").fadeOut("slow");			
});

$(document).ready(function(){
	
	const showOnPx = 100;
	const backToTopButton = document.querySelector(".back-to-top")

	const scrollContainer = () => {
  		return document.documentElement || document.body;
	};
	const goToTop = () => {
		document.body.scrollIntoView({
		  behavior: "smooth",
		});
	  };

	document.addEventListener("scroll", () => {
	if (scrollContainer().scrollTop > showOnPx) {
		backToTopButton.classList.remove("hidden")
	} else {
		backToTopButton.classList.add("hidden")
	}
	})
	

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
});