const poemLines = [
  "A Midnight Encounter\n",
  "\nIt started with a question",
  "in a quiet, glowing night—",
  "a game, a stranger,",
  "a simple ask for help,",
  "and fate whispered,",
  "“Watch this.”",
  "\nFrom strangers to friends,",
  "then best of the best—",
  "days blurred into joy,",
  "laughs stitched into time,",
  "and suddenly,",
  "no one stood above you.",
  "\nYou made my ordinary days feel seen.",
  "You made the pixels feel like home.",
  "And somewhere between",
  "friendly banter and silent stays,",
  "you fell for me—",
  "and I, against the odds,",
  "fell too.",
  "\nWe’ve had our storms,",
  "the highs and the aches,",
  "but still, you remain—",
  "in every moment my heart takes.",
  "\nIf there’s one thing I know,",
  "it’s this:",
  "you are the kindest chapter",
  "my heart has ever held.",
  "And no matter where time leads us,",
  "you’ll always be",
  "a chapter I’ll reread in my heart forever."
];

function startExperience() {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("birthday-msg").classList.remove("hidden");
  document.getElementById("poem-section").classList.remove("hidden");
  document.getElementById("open-when").classList.remove("hidden");
  document.getElementById("gift-section").classList.remove("hidden");
  document.getElementById("ending-line").classList.remove("hidden");

  // Typing effect
  typePoem(0);
  document.getElementById("bg-music").play();
}

function typePoem(index) {
  if (index >= poemLines.length) return;

  const poemContainer = document.getElementById("poem-section");
  const line = document.createElement("div");
  line.textContent = poemLines[index];
  line.classList.add("typing");
  poemContainer.appendChild(line);

  setTimeout(() => {
    line.classList.remove("typing");
    typePoem(index + 1);
  }, 1000);
}

// Open When Toggle
function toggleLetter(type) {
  ['sad', 'miss', 'bad', 'love'].forEach(t => {
    const el = document.getElementById(`msg-${t}`);
    if (t === type) {
      el.classList.toggle("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
}

// Gift Confetti Surprise
function openGift() {
  document.getElementById("gift-message").classList.remove("hidden");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
