document.getElementById('heart').addEventListener('click', () => {
  document.getElementById('landing').style.display = 'none';
  const main = document.getElementById('main-content');
  main.classList.remove('hidden');

  // Play the music
  const audio = document.getElementById('birthday-audio');
  audio.play();
});
