let modal = document.getElementById('modal_main');
let modal2 = document.getElementById('modal_success');

modal.classList.add('modal_active');

let close = document.getElementsByClassName('modal__close_times');
    Array.from(close).forEach(element => {
        element.closest('modal_active').addEventListener('click', () => {
        modal.classList.remove('modal_active');
        modal2.classList.remove('modal_active');
    })
})

