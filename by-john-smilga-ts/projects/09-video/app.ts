const btn = document.querySelector(".switch-btn") as HTMLButtonElement;
const video = document.querySelector(".video-container") as HTMLVideoElement;

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
