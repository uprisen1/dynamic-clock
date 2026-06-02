function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('time-main').textContent = `${hours}:${minutes}`;
    document.getElementById('time-seconds').textContent = seconds;

    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

// Audio Engine Setup
const musicBtn = document.getElementById('music-btn');
const themeSong = document.getElementById('theme-song');

musicBtn.addEventListener('click', () => {
    if (themeSong.paused) {
        themeSong.play();
        musicBtn.classList.add('playing');
    } else {
        themeSong.pause();
        musicBtn.classList.remove('playing');
    }
});

// Fullscreen Engine Setup
const fullscreenBtn = document.getElementById('fullscreen-btn');

fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        // Enters fullscreen mode
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        // Exits fullscreen mode if clicked again
        document.exitFullscreen();
    }
});

// Run immediately & initialize loops
updateClock();
setInterval(updateClock, 1000);