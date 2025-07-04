const landing = document.getElementById('landing');
const mainContent = document.getElementById('main-content');
const audio = document.getElementById('birthday-audio');
const msg = document.getElementById('birthday-message');
const poem = document.getElementById('poem-section');

landing.addEventListener('click', () => {
  landing.style.display = 'none';
  mainContent.classList.remove('hidden');
  audio.loop = true;
  audio.play();
  setInterval(createHeart, 500);
});

// Swipe detection
let startX = 0, swiping = false;
mainContent.addEventListener('touchstart', e => {
  swiping = true;
  startX = e.touches[0].clientX;
});
mainContent.addEventListener('touchmove', e => {
  if (swiping && e.touches[0].clientX - startX < -100) {
    showPoem();
    swiping = false;
  }
});

mainContent.addEventListener('mousedown', e => {
  swiping = true;
  startX = e.clientX;
});
mainContent.addEventListener('mousemove', e => {
  if (swiping && e.clientX - startX < -100) {
    showPoem();
    swiping = false;
  }
});
mainContent.addEventListener('mouseup', () => swiping = false);
mainContent.addEventListener('mouseleave', () => swiping = false);

// Falling hearts
function createHeart() {
  const h = document.createElement('div');
  h.className = 'heart-fall';
  h.textContent = '💖';
  h.style.left = Math.random() * 100 + 'vw';
  h.style.animationDuration = 2 + Math.random() * 3 + 's';
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 5000);
}

// Show poem section and type it
function showPoem() {
  msg.style.display = 'none';
  poem.classList.remove('hidden');
  poem.scrollIntoView({ behavior: 'smooth' });
  startTyping();
}

// Typing Effect
function startTyping() {
  const lines = [
    "A Midnight Encounter\n",
    "It started with a question\nin a quiet, glowing night—\na game, a stranger,\na simple ask for help,\nand fate whispered,\n“Watch this.”\n",
    "From strangers to friends,\nthen best of the best—\ndays blurred into joy,\nlaughs stitched into time,\nand suddenly,\nno one stood above you.\n",
    "You made my ordinary days feel seen.\nYou made the pixels feel like home.\nAnd somewhere between\nfriendly banter and silent stays,\nyou fell for me—\nand I, against the odds,\nfell too.\n",
    "We’ve had our storms,\nthe highs and the aches,\nbut still, you remain—\nin every moment my heart takes.\n",
    "If there’s one thing I know,\nit’s this:\nyou are the kindest chapter\nmy heart has ever held.\nAnd no matter where time leads us,\nyou’ll always be\na chapter I’ll reread in my heart forever.\n"
  ];

  poem.innerHTML = ''; // Clear existing

  lines.forEach((line, i) => {
    const p = document.createElement('p');
    p.classList.add('typing');
    poem.appendChild(p);
    typeLine(p, line, i * 5000);
  });

  // Add the final soft note after the last line
  setTimeout(() => {
    const note = document.createElement('div');
    note.className = 'ending-note';
    note.textContent = '— from the girl who still smiles when she thinks of you.';
    poem.appendChild(note);
    document.getElementById('open-when-section').classList.remove('hidden');
    showGiftBox();
    note.scrollIntoView({ behavior: 'smooth' });
  }, lines.length * 5000 + 1500); // show after last line
}

function typeLine(el, text, delay = 0) {
  let i = 0;
  setTimeout(() => {
    const interval = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 70);
  }, delay);
}
function openLetter(type) {
  const letterBox = document.getElementById('letter-box');
  const letterContent = document.getElementById('letter-content');
  letterBox.classList.remove('hidden');

  let text = '';
  switch(type) {
    case 'sad':
      text = "It's okay to feel sad sometimes. Just remember, I'm always here for you, cheering for you silently. Take a deep breath — this too shall pass 💙";
      break;
    case 'miss':
      text = "Missing me? Here’s a hug through the screen 🤗💌 You're in my heart, even when we’re not talking. Close your eyes — I’m probably thinking of you too.";
      break;
    case 'need-love':
      text = "Here’s your reminder: You are loved. Deeply. Unconditionally. Always. And not just by anyone — by me 💕";
      break;
    case 'random':
      text = "SURPRISE! This page secretly adores you. And hey — did you know you're really cute when you smile reading this?";
      break;
    case 'virtual-hug':
      text = "Come here, kiddo 🤗💙\n\nClose your eyes for a second.\nNow imagine my arms wrapped around you — tight, warm, safe.\nThe world can be heavy sometimes, I know…\nBut I’m right here.\nAlways just a thought away.\n\nYou’re not alone.\nYou’re so loved.\nAnd I’m so proud of you — for all that you are, and all that you’re becoming.\n\n*Hug delivered.*\nNow breathe in. And let go of a little bit of that weight.\n\nYou're doing better than you think, meri jaan. 💫";
      break;

    case 'cant-sleep':
      text = "Close your eyes, breathe slow. Imagine I’m whispering goodnight to you. You're safe, you're loved — and I’m here, always 💤💙";
      break;

    case 'need-laugh':
      text = "Knock knock! Who’s there? You. You who? You whooooo~ you're the cutest person reading this 😄💫";
      break;

    case 'bored':
      text = "If you’re bored, go reread the poem and pretend it’s a dramatic anime confession. Or just text me, I’ll drop chaos 😈💌";
      break;

    case 'just-because':
      text = "No reason. No moment. Just a little reminder: you matter. You make my world brighter by simply being you. 💞";
      break;

  }

  letterContent.textContent = text;
}

function closeLetter() {
  document.getElementById('letter-box').classList.add('hidden');
}
function revealMemories() {
  document.getElementById('memories-gallery').classList.remove('hidden');
  document.getElementById('show-memories').classList.add('hidden');
  document.getElementById('memories-gallery').scrollIntoView({ behavior: 'smooth' });
}
function hideMemories() {
  document.getElementById('memories-gallery').classList.add('hidden');
  document.getElementById('show-memories').classList.remove('hidden');
}
function showStarryMessage() {
  const overlay = document.getElementById('starry-message');
  overlay.classList.add('visible');
}

function returnToHeart() {
  document.getElementById('starry-message').classList.remove('visible');
  document.getElementById('main-content').classList.add('hidden');
  document.getElementById('heart-screen').classList.remove('hidden');
  document.getElementById('bg-music').pause();
}
// Show gift box when poem typing ends
function showGiftBox() {
  document.getElementById('gift-box').classList.remove('hidden');
}

// Trigger gift message
function openGift() {
  document.getElementById('gift-message').classList.remove('hidden');
}

// Fade to starry background
function fadeToStars() {
  document.getElementById('gift-message').classList.add('hidden');
  document.getElementById('main-content').classList.add('hidden');
  showStarryMessage();
}
