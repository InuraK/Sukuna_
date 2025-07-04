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
    note.scrollIntoView({ behavior: 'smooth' });
    showGiftBox();
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
      text = "It's okay to feel sad sometimes. Just remember, Your inuri is always by your side, cheering for you silently huihui. One deep breath at a time, alright? This feeling will pass, I promise." 💙";
      break;
    case 'miss':
      text = "Missing me awww? Here’s a hug through the screen 🤗. You're in my heart, even when we’re not talking. Close your eyes — I’m probably thinking of you too.";
      break;
    case 'need-love':
      text = "Here’s your reminder: You are loved. Deeply. Unconditionally. Always. And not just by anyone — by me (you get that?)💕";
      break;
    case 'random':
      text = "SURPRISE! This page secretly adores you. And hey, did you know you're really cute when you smile reading this? (Cutie u.u)";
      break;
    case 'virtual-hug':
      text = "Come here, kiddo 🤗💙\n\nClose your eyes for a second.\nNow imagine my arms wrapped around you — tightlyyy, warm, safe.\nThe world can be heavy sometimes, I know…\nBut I’m right here.\nAlways just a thought away.\n\nYou’re not alone.\nNo negativity of this world can harm you.\nAnd I’m so proud of you — for all that you are, and all that you’re becoming.\n\n*Hug delivered.*\nNow breathe in. And let go of a little bit of that weight.\n\nYou're doing better than you think, My Hubby. 💫";
      break;

    case 'cant-sleep':
      text = "Close your eyes, breathe slow. Imagine I’m whispering goodnight to you. *a forehead goodnight kiss* You're safe, you're loved — and I’m here, always 💤💙";
      break;

    case 'need-laugh':
      text = "Knock knock! Who’s there? You. You who? You whooooo~ you're the cutest person reading this (Cutie again T-T dbhcgfucdjnbchd) but you are dumb, idiot, buddha, gadha, jahil, kabadi, ratman, nightmare,halwe, khamba, kiddo but still cute.💫";
      break;

    case 'bored':
      text = "If you’re bored, go reread the poem and pretend it’s a dramatic anime confession. Or just text me, idiot ye bhi batana padega. Okay, now go text me hurrr. Or maybe send me your voice notes -.-'";
      break;

    case 'just-because':
      text = "No reason. No moment. Just a little reminder: you matter.You are not replaceable, not forgettable. You are my favourite person— just thought you should know that.💞";
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
// Show gift box after poem appears
function showGiftBox() {
  document.getElementById('gift-box').classList.remove('hidden');
}

// Trigger gift message box
function revealGiftMessage() {
  document.getElementById('gift-message-box').classList.remove('hidden');
}

// Fade into starry night scene
function startStarScene() {
  document.getElementById('main-content').classList.add('fade-out');

  setTimeout(() => {
    document.getElementById('main-content').innerHTML = `
      <div class="star-quote">
        <p>“The universe conspired to make our paths cross — and I’m thankful every night.”</p>
        <button onclick="goBackHome()">Go Back</button>
      </div>
    `;
    document.getElementById('main-content').classList.remove('fade-out');
  }, 2000);
}

// Go back to heart screen
function goBackHome() {
  location.reload();
}

