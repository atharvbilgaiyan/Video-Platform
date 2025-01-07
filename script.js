// script.js
document.addEventListener("DOMContentLoaded", () => {
    const videoPlayer = document.getElementById("videoPlayer");
    const videoList = document.querySelectorAll(".video-list li");
  
    // Add click event listeners to video list items
    videoList.forEach((item) => {
      item.addEventListener("click", () => {
        const videoSrc = item.getAttribute("data-video");
        videoPlayer.src = videoSrc;
        videoPlayer.play(); // Auto-play the selected video
      });
    });
  });
  