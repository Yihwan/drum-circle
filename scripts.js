// listen and handle keyboard presses
document.addEventListener('keydown', function(e){
  playSound(e.keyCode);
});

// listen and handle clicks
document.addEventListener('click', function(e) {
  const clickedKey = e.path[1]['dataset'].key;
  playSound(clickedKey);
});

function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
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
