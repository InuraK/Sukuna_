document.getElementById('heart').addEventListener('click', () => {
  document.getElementById('landing').style.display = 'none';
  const main = document.getElementById('main-content');
  main.classList.remove('hidden');

  const audio = document.getElementById('birthday-audio');
  audio.play();
});

document.getElementById('show-poem').addEventListener('click', () => {
  document.getElementById('birthday-message').style.display = 'none';
  document.getElementById('poem-section').classList.remove('hidden');
});
