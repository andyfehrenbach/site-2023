const adelPage = document.getElementById('adelPage')
const attemptedPassword = prompt('Please enter Password');

if (attemptedPassword == 'Guest@2021!') {
    adelPage.classList.remove('hidden');
} else {
    prompt('Please try again');
    adelPage.outerHTML = "";
}