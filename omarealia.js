document.getElementById('hidden').style.display = "none";

	$(document).ready(function() {
	$(window).scroll(function() {
		
		if ($(this).scrollTop() > 20) {
			
			$('#toTopBtn').fadeIn();

		} else {
			
			$('#toTopBtn').fadeOut();
		}
	});

	$('#toTopBtn').click(function() {
		$("html, body").animate({
		
			scrollTop: 0

		}, 1000);
	
	return false;
	
		});
	});

	document.getElementById('comment').addEventListener('click', function() {
		var x = document.getElementById('hidden');

		x.style.display = "";

		$('html, body').animate({
  			scrollTop: $("#hidden").offset().top
			});
		
	});

	document.getElementById('close').addEventListener('click', function() {
		document.getElementById('hidden').style.display = "none";
	});