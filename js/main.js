//menu button open
document.getElementById('contact-btn').addEventListener('click', function (event) {
	var button = document.getElementById('contact-btn'); 
	var menu = document.getElementById('home-contact');

	var classes = document.getElementById('contact-btn').classList;
	var isActive = _.contains(classes, 'btn-active');

	if (isActive){
		classes.remove('btn-active');
		menu.classList.remove('open');
	}

	else {
		classes.add('btn-active');
		menu.classList.add('open'); 
	}

});