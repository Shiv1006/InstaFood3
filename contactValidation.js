function formValidation() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (name.trim() == '') {
        alert('Please enter your name');
        return false;
    }

    if (email.trim() == '') {
        alert('Please enter your email');
        return false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (phone.trim() == '') {
        alert('Please enter your phone number');
        return false;
    }

    return true;

}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
//    hello