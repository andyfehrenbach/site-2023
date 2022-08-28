document.addEventListener("DOMContentLoaded", function() {
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset.toFixed(1));
  }, false);

  const classes = ['colors-1', 'colors-2', 'colors-3'];
  const images = ['windmill_1a', 'windmill_2'];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  document.body.classList.add(classes[Math.floor(Math.random() * classes.length)]);

  document.getElementById('image').src=`${randomImage}.png`;

});

