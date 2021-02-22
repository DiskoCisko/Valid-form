let form = document.querySelector('form');
let email = document.querySelector('#email');
let btnSubmit = document.querySelector('.btn');
let radioInput = document.querySelector('fieldset');

let spanErrorEmail = document.createElement('span');
let spanErrorRequired = document.createElement('span');
let spanErrorRequiredEmail = document.createElement('span');

let errorMassegeEmail = 'Укажите корректную почту';
let errorMassegeRequired = 'Заполните форму';

let r1 = document.querySelector('#r1');
let r2 = document.querySelector('#r2');

email.addEventListener('input', function(event){
    console.dir(email.validity) 
    console.dir(email.checkValidity())
    if (email.validity.typeMismatch) {
        email.setCustomValidity(errorMassegeEmail);
        email.classList.add('error');
        spanErrorEmail.innerText = errorMassegeEmail;
        email.insertAdjacentElement('afterend', spanErrorEmail);
        console.dir(email.validationMessage)
    } else {
        email.setCustomValidity('');
    }
})

form.onsubmit= function(e){
    e.preventDefault();
}

btnSubmit.addEventListener('click', function(event){
    if (!r1.checkValidity()) {
        radioInput.classList.toggle('error');
        spanErrorRequired.innerText = errorMassegeRequired;
        radioInput.insertAdjacentElement('afterend', spanErrorRequired);
    } else {
        radioInput.classList.remove('error');
        spanErrorRequired.remove()
    }
    console.dir(r1.checkValidity());
    console.dir(email.validity);
})

btnSubmit.addEventListener('click', function(){
    if(email.validity.valueMissing) {
        spanErrorRequiredEmail.innerText = errorMassegeRequired;
        email.insertAdjacentElement('afterend', spanErrorRequiredEmail);
        email.classList.toggle('error');
    } else {
        email.classList.remove('error');
        spanErrorRequiredEmail.remove();
    }
})

//console.dir(email)