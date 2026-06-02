function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Formatting padding
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update main clock (HH:MM)
    document.getElementById('time-main').textContent = `${hours}:${minutes}`;
    
    // Update seconds independently
    document.getElementById('time-seconds').textContent = seconds;

    // Standard iOS Lockscreen Date display (e.g., "Tuesday, June 2")
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

// Interactive Audio Player Setup
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

// Run immediately & initialize loops
updateClock();
setInterval(updateClock, 1000);