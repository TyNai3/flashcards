const playBtn = document.querySelector('#play');

playBtn.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/topics';
});
