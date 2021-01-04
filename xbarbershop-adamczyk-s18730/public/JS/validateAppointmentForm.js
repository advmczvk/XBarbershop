function validateForm() {
    const clientInput = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone')
    };
    const clientError = {
        errorName: document.getElementById('errorName'),
        errorEmail: document.getElementById('errorEmail'),
        errorPhone: document.getElementById('errorPhone')
    };
    const errorSummary = document.getElementById('errorsSummary');
    

    resetErrors([clientInput.name, clientInput.email, clientInput.phone], [clientError.errorName, clientError.errorEmail, clientError.errorPhone], errorSummary);
    let valid = true;

    if(!checkRequired(clientInput.name.value)) {
        valid = false;
        clientInput.name.classList.add("error-input");
        clientError.errorName.innerText = "Field is required";
    } else if(!checkTextLengthRange(clientInput.name.value, 5, 125)) {
        valid = false;
        clientInput.name.classList.add("error-input");
        clientError.errorName.innerText = "Name must be in range 5-125";
    }

    if(!checkRequired(clientInput.email.value)) {
        valid = false;
        clientInput.email.classList.add("error-input");
        clientError.errorEmail.innerText = "Field is required";
    } else if(!checkEmail(clientInput.email.value)) {
        valid = false;
        clientInput.email.classList.add("error-input");
        clientError.errorEmail.innerText = "E-mail incorrect";
    } else if(!checkTextLengthRange(clientInput.email.value, 5, 60)) {
        valid = false;
        clientInput.email.classList.add("error-input");
        clientError.errorEmail.innerText = "Email must be in range 5-60";
    }

    if(!checkRequired(clientInput.phone.value)) {
        valid = false;
        clientInput.phone.classList.add("error-input");
        clientError.errorPhone.innerText = "Field is required";
    } else if(!checkPhone(clientInput.phone.value)) {
        valid = false;
        clientInput.phone.classList.add("error-input");
        clientError.errorPhone.innerText = "Phone number incorrect";
    }

    if(!valid) {
        errorSummary.innerText = "Form contains errors!";
    }

    return valid;
}