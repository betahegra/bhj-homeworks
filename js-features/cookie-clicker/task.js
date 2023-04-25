let clicks = 0;
const button = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
button.onclick = () => {
    clicks++;
    counter.textContent = clicks;
    if(clicks % 2 === 0) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
}