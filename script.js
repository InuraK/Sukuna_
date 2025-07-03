// When the heart is clicked
document.getElementById('heart').addEventListener('click', () => {
  // Hide landing
  document.getElementById('landing').style.display = 'none';

  // Show main content
  const main = document.getElementById('main-content');
  main.classList.remove('hidden');

  // Play the birthday audio
  const audio = document.getElementById('birthday-audio');
  audio.play();
});

// When "Swipe to Poem" is clicked
document.getElementById('show-poem').addEventListener('click', () => {
  // Hide the birthday message
  document.getElementById('birthday-message').style.display = 'none';

  // Show the poem
  const poemSection = document.getElementById('poem-section');
  poemSection.classList.remove('hidden');

  // Scroll smoothly to poem
  poemSection.scrollIntoView({ behavior: 'smooth' });
});
