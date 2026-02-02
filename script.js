let audio = document.getElementById("audio");
let progress = document.getElementById("progress");
let lyrics = document.querySelector(".lyrics");

/* Progress bar mengikuti lagu */
audio.onloadedmetadata = function() {
    progress.max = audio.duration;
};

setInterval(() => {
    progress.value = audio.currentTime;
}, 400);

/* Geser progress bar */
progress.oninput = function() {
    audio.currentTime = progress.value;
    audio.play();
};

/* Sinkronisasi animasi lirik */
audio.onplay = () => {
    lyrics.style.animationPlayState = "running";
};

audio.onpause = () => {
    lyrics.style.animationPlayState = "paused";
};
