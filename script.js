function showScene(sceneId) {
  document.querySelectorAll('.scene').forEach(scene => {
    scene.classList.remove('active');
  });

  document.getElementById(sceneId).classList.add('active');
}

// BALLOON POPPING

let poppedCount = 0;

function popBalloon(number) {
  const balloon = document.getElementById('balloon' + number);
  const wish = document.getElementById('wish' + number);

  if (balloon.dataset.popped === 'true') return;

  balloon.dataset.popped = 'true';
  balloon.classList.add('popped');

  setTimeout(() => {
    balloon.style.display = 'none';

    if (number === 1) {
      wish.innerHTML = '🎂 HAPPY BIRTHDAY! 💗';
    } else {
      wish.innerHTML = '🌸 MANY MANY RETURNS OF THE DAY! 💕';
    }
  }, 350);

  poppedCount++;

  if (poppedCount === 2) {
    setTimeout(() => {
      document.getElementById('enjoyButton')
        .classList.remove('hidden');
    }, 500);
  }
}

// PANDA DANCE AND KISS

function startPanda() {
  showScene('scene5');

  const pandaText = document.getElementById('pandaText');
  const kiss = document.getElementById('flyingKiss');
  const kissText = document.getElementById('kissText');

  pandaText.innerHTML = 'A little dance for you! 💃';

  // Let the panda dance first
  setTimeout(() => {
    pandaText.innerHTML = 'AND NOW... A BIG KISS! 😘';

    kiss.classList.add('send-kiss');
    kissText.classList.remove('hidden');
  }, 2500);

  // Automatically open the final birthday letter
  setTimeout(() => {
    showScene('scene6');
  }, 4500);
}
