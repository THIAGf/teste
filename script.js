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


document.getElementById("autocomplete-btn").style.display = "none"; // Oculta o botão inicialmente

document.getElementById("email").addEventListener("input", function () {
    var autocompleteBtn = document.getElementById("autocomplete-btn");
    var emailValue = this.value;

    if (emailValue.includes("@") && !emailValue.endsWith("@")) {
        autocompleteBtn.style.display = "inline-block";
    } else {
        autocompleteBtn.style.display = "none";
    }
});

function autocompleteEmail() {
    var emailInput = document.getElementById("email");
    emailInput.value += "mail.com";
    document.getElementById("autocomplete-btn").style.display = "none";
}
