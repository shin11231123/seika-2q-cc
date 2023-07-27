import anime from 'animejs/lib/anime.es.js';


var toggleButton = document.getElementById('toggle-button');
var audio = document.getElementsByTagName('audio')[0];

toggleButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    toggleButton.textContent = 'Pause';
  } else {
    audio.pause();
    toggleButton.textContent = 'Play';
  }
});


const loaderElements = document.querySelectorAll(".loader span");

const animation = anime({
targets: loaderElements,
rotate: "1turn",
easing: "linear",
duration: 3000,
loop: true,
borderColor: [
{ value: "#ff4081" },
{ value: "#00bcd4" },
{ value: "#ffc107" },
],
scale: [
	{ value: 1, },
	{ value: 1.5,},
	{ value: 1, },
    ],
 


autoplay: false, // アニメーションを自動再生しないように設定
});

var toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', function() {
if (animation.paused) {
animation.play(); // アニメーションを再生する
toggleButton.textContent = 'Pause';
} else {
animation.pause(); // アニメーションを一時停止する
toggleButton.textContent = 'Play';
}
});





