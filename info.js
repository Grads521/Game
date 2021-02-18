// const fio = document.querySelector('.fio').textContent;

// fio.textContent = 'Исаев Максим Сергеевич';

document.querySelector('.fio').textContent = 'Исаев Максим Сергеевич';

const buttonPhone = document.querySelector('.show-phone');

buttonPhone.addEventListener('click', togglePhone);

let isPhoneInvisible = true;

function togglePhone() {
    if (isPhoneInvisible === false) {
        isPhoneInvisible = true;
        buttonPhone.textContent = 'Показать телефон';

    } else {
        isPhoneInvisible = false
        buttonPhone.textContent = 'Скрыть телефон';
    }
    const showPhone = document.querySelector('.phone');
    showPhone.hidden = isPhoneInvisible;
}









