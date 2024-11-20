// Create a video element
const video = document.createElement("video");

// Set video attributes
video.src = "background-video.mp4"; // Replace with your video file path
video.autoplay = true;
video.muted = true;
video.loop = true;

// Style the video to cover the background
video.style.position = "fixed";
video.style.top = "0";
video.style.left = "0";
video.style.width = "100%";
video.style.height = "100%";
video.style.objectFit = "cover";
video.style.zIndex = "-1"; // Place it behind all content

// Append the video to the body
document.body.appendChild(video);
