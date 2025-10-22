const playButton = document.getElementById('play-button');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');

playButton.addEventListener('click', () => {
  videoContainer.classList.add('active');

  setTimeout(() => {
    video.src = "https://www.youtube.com/embed/zgHc-dJ1eww?autoplay=1&rel=0&showinfo=0&modestbranding=1";
  }, 1500);

  setTimeout(() => {
    if (videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen();
    } else if (videoContainer.webkitRequestFullscreen) {
      videoContainer.webkitRequestFullscreen();
    }
  }, 2000);
});
