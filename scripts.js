// listen and handle keyboard presses
document.addEventListener('keydown', playSound);

// listen and handle clicks
document.addEventListener('click', function(e) {
  console.log(e);
});

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // return for invalid keypress
  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(function(key) {
  key.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
