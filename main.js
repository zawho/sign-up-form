const firstPass = document.getElementById('first-password');
const confirmPass = document.getElementById('confirm-password');
const passMsg = document.querySelector('.password-msg');
const form = document.getElementById('sign-up');

function stopSubmit(e) {
    e.preventDefault();
}

function addFocus() {
    this.style.border = '2px solid blue';
}

//Validation for first password input.
function checkPassFirst() {
    if (firstPass.value == '' && confirmPass.value == '' || firstPass.value != '' && confirmPass.value == '') {
        firstPass.style.border = '1px solid rgb(193, 193, 193)';
        confirmPass.style.border = '1px solid rgb(193, 193, 193)';
        passMsg.style.display = 'none';
    } else if (firstPass.value === confirmPass.value && (firstPass.value != '' && confirmPass.value != '')) {
        form.removeEventListener('submit', stopSubmit);
        firstPass.style.border = '2px solid green';
        confirmPass.style.border = '2px solid green';
        passMsg.style.display = 'none';
    } else if (firstPass.value == '' && confirmPass.value != '' || (firstPass.value != confirmPass.value && confirmPass.value != '')) {
        form.addEventListener('submit', stopSubmit);
        firstPass.style.border = '2px solid red';
        confirmPass.style.border = '2px solid red';
        passMsg.style.display = 'block';
    }
}

//Validation for password confirmation input.
function checkPassConfirm() {
    if (firstPass.value == '' && confirmPass.value == '') {
        firstPass.style.border = '1px solid rgb(193, 193, 193)';
        confirmPass.style.border = '1px solid rgb(193, 193, 193)';
        passMsg.style.display = 'none';
    }
    else if (firstPass.value === confirmPass.value && (firstPass.value != '' && confirmPass.value != '')) {
        form.removeEventListener('submit', stopSubmit);
        firstPass.style.border = '2px solid green';
        confirmPass.style.border = '2px solid green';
        passMsg.style.display = 'none';
    } else if (firstPass.value != confirmPass.value) {
        form.addEventListener('submit', stopSubmit);
        firstPass.style.border = '2px solid red';
        confirmPass.style.border = '2px solid red';
        passMsg.style.display = 'block';
    }
}

firstPass.addEventListener('focusin', addFocus);
confirmPass.addEventListener('focusin', addFocus);
firstPass.addEventListener('focusout', checkPassFirst);
confirmPass.addEventListener('focusout', checkPassConfirm);