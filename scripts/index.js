document.addEventListener("DOMContentLoaded", function () {
  setRandomColorScheme();
  setRandomImage();
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset.toFixed(1));
  }, false);
});

function setRandomColorScheme() {
  const classes = ['colors-1', 'colors-2', 'colors-3'];
  document.body.classList.add(classes[Math.floor(Math.random() * classes.length)]);
}

function setRandomImage() {
  const images = ['windmill', 'forest', 'smokestack', 'solar'];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  document.getElementById('image').src = `${randomImage}.png`;
}