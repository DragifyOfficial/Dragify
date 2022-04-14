/**
* Sound icon toggle
*/
const playIconContainer = document.getElementById('play-button');
const audio = document.querySelector('audio');
let playState = 'play';

  
function mute(x) {
  x.classList.toggle("bi-volume-up-fill");
  x.classList.toggle("bi-volume-mute-fill");
}

playIconContainer.addEventListener('click', () => {
 if(playState === 'play') {
	audio.play();
	playState = 'pause';
  } else {
	audio.pause();
	playState = 'play';
  }
});