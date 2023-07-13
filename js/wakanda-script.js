var video = document.getElementById('video');
video.addEventListener('click', ()=>{
  var playerIcon = document.getElementById('player-icon');
  if (video.paused) {
    playerIcon.style.display = "none";
  } else {
    playerIcon.style.display = "block";
  }
});