document.getElementById('hidden').style.display = "none";
document.getElementById('warning').style.display = "none";

document.getElementById('comment').addEventListener('click', function() {

var x = document.getElementById('hidden');

x.style.display = "";

$('html, body').animate({
  	scrollTop: $("#hidden").offset().top
	});
		
});

document.getElementById('submit').addEventListener('mouseover', function() {
	document.getElementById('warning').style.display = "";
	document.getElementById('warning').innerHTML = "Send us your message"
});

document.getElementById('submit').addEventListener('mouseout', function() {
	document.getElementById('warning').style.display = "none";

});

document.getElementById('close').addEventListener('mouseout', function() {
	document.getElementById('warning').style.display = "none";

});

document.getElementById('close').addEventListener('mouseover', function() {
	document.getElementById('warning').style.display = "";
	document.getElementById('warning').innerHTML = "Close without submitting"
});

document.getElementById('xbutton').addEventListener('click', function() {
	document.getElementById('hidden').style.display = "none";
});

document.getElementById('close').addEventListener('click', function() {
	document.getElementById('hidden').style.display = "none";
});