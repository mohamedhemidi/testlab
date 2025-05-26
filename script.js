// script.js
function updateTime() {
    const watch = document.getElementById('watch');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    watch.textContent = `${hours}:${minutes}:${seconds}`;
}

// Set the initial time immediately
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
