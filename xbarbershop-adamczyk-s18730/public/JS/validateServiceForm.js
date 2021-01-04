function validateForm() {
    const clientInput = {
        service: document.getElementById('service'),
        time: document.getElementById('time'),
        price: document.getElementById('price')
    };
    const clientError = {
        errorService: document.getElementById('errorService'),
        errorTime: document.getElementById('errorTime'),
        errorPrice: document.getElementById('errorPrice')
    };
    const errorSummary = document.getElementById('errorsSummary');
    
    resetErrors([clientInput.service, clientInput.time, clientInput.price], [clientError.errorService, clientError.errorTime, clientError.errorPrice], errorSummary);
    let valid = true;

    if(!checkRequired(clientInput.service.value)) {
        valid = false;
        clientInput.service.classList.add("error-input");
        clientError.errorService.innerText = "Field is required";
    } else if(!checkTextLengthRange(clientInput.service.value, 2, 60)) {
        valid = false;
        clientInput.service.classList.add("error-input");
        clientError.errorService.innerText = "Service name must be in range 2-60";
    }

    if(!checkRequired(clientInput.time.value)) {
        valid = false;
        clientInput.time.classList.add("error-input");
        clientError.errorTime.innerText = "Field is required";
    } else if(!checkDigit(clientInput.time.value)) {
        valid = false;
        clientInput.time.classList.add("error-input");
        clientError.errorTime.innerText = "Time can't be negative!";
    }

    if(!checkRequired(clientInput.price.value)) {
        valid = false;
        clientInput.price.classList.add("error-input");
        clientError.errorPrice.innerText = "Field is required";
    } else if(!checkDigit(clientInput.price.value)) {
        valid = false;
        clientInput.price.classList.add("error-input");
        clientError.errorPrice.innerText = "Price can't be negative!";
    }

    if(!valid) {
        errorSummary.innerText = "Form contains errors!";
    }

    return valid;
}