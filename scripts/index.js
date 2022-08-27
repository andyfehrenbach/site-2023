window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset.toFixed(1));
  }, false);