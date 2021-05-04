const adelPage = document.getElementById('adelPage')
const attemptedPassword = prompt('Please enter Password');

if (attemptedPassword == 'Ad3lte@m') {
    adelPage.classList.remove('hidden');
} else {
    prompt('Please try again');
    adelPage.outerHTML = "";
}