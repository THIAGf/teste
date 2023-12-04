let container = document.querySelector('div');

let input = document.getElementById('password');

let icon = document.querySelector('img');

icon.addEventListener('click', function() {

container.classList.toggle('visible');
 if(container.classList.contains('visible')) {

icon.src = 'img/eye-off.svg';

input.type = 'text';

} else {

icon.src = 'img/eye.svg'

input.type = 'password';

}

});


document.getElementById('emailInput').addEventListener('input', function() {
	var emailInput = this;
	var inputValue = emailInput.value;

	if (inputValue.endsWith("@")) {
		emailInput.value += 'gmail.com';
	}
});