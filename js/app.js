


const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');


const tl = new TimelineMax();

tl.fromTo(hero,1, {height:"0%"}, {height:"90%", ease: Power2.easeInOut})
.fromTo(
    hero,
    1,
    { width: "100%"},
    { width: "90%", ease: Power2.easeInOut}
)

.fromTo(
    slider,
    1.2,
    { width: "-100%"},
    { width: "0%", ease: Power2.easeInOut},
    "-=1.2"
)

.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

