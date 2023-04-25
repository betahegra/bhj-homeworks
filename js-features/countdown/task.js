const countDown = document.getElementById('status');

let time = 59;

let intervalID = setInterval(updateCountDown, 1000);

function updateCountDown() {
    countDown.innerHTML = `До окончания конкурса осталось секунд: ${time}`;
    time--;
    if(time === -1) {
        alert('Вы победили в конкурсе');
        clearInterval(intervalID);
    }
}