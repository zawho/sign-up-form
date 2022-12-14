const firstPass = document.getElementById('first-password');
const confirmPass = document.getElementById('confirm-password');
const passMsg = document.querySelector('.password-msg');
const form = document.getElementById('sign-up');

function stopSubmit(e) {
    e.preventDefault();
}

function checkPassword() {
    if (firstPass.value == '' && confirmPass.value == '') {
        firstPass.style.border = '1px solid rgb(193, 193, 193)';
        confirmPass.style.border = '1px solid rgb(193, 193, 193)';
        passMsg.style.display = 'none';
    }
    if (firstPass.value === confirmPass.value) {
        form.removeEventListener('submit', stopSubmit);
        firstPass.style.border = '2px solid green';
        confirmPass.style.border = '2px solid green';
        passMsg.style.display = 'none';
    } else {
        form.addEventListener('submit', stopSubmit);
        firstPass.style.border = '2px solid red';
        confirmPass.style.border = '2px solid red';
        passMsg.style.display = 'block';
    }
}

function clearMsg() {
    if (firstPass.value == '' && confirmPass.value == '') {
        firstPass.style.border = '1px solid rgb(193, 193, 193)';
        confirmPass.style.border = '1px solid rgb(193, 193, 193)';
        passMsg.style.display = 'none';
    }
}

firstPass.addEventListener('input', clearMsg);
confirmPass.addEventListener('input', checkPassword);