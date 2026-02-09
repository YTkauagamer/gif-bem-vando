const img = document.getElementById('gif');

window.addEventListener('storage', () => {
  const gif = localStorage.getItem('overlayGif');

  if (gif) {
    img.src = gif;
    img.style.display = 'block';

    setTimeout(() => {
      img.style.display = 'none';
    }, 5000); // tempo do gif na tela (5s)
  }
});
