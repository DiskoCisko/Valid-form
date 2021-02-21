let email = document.querySelector('#email');

email.addEventListener('input', function(event){
    console.dir(email.validity) 
    console.dir(email.checkValidity())
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Укажите корректную почту');
        console.dir(email.validationMessage)
    } else {
        email.setCustomValidity('');
    }
})

//console.dir(email)