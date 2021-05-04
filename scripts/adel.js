const adelPage = document.getElementById('adelPage');
const pre = document.getElementById('pre');
const attemptedPassword = prompt('Please enter the password');

if (attemptedPassword == 'Ad3lte@m') {
    adelPage.classList.remove('hidden');
    pre.classList.add('hidden');
} else {
    prompt('Please try again');
    adelPage.outerHTML = "";
}