function validateForm() {
    const serviceInput = {
        name: document.getElementById('name'),
        time: document.getElementById('time'),
        price: document.getElementById('price')
    };
    const serviceError = {
        errorName: document.getElementById('errorName'),
        errorTime: document.getElementById('errorTime'),
        errorPrice: document.getElementById('errorPrice')
    };
    const errorSummary = document.getElementById('errorsSummary');
    
    resetErrors([serviceInput.name, serviceInput.time, serviceInput.price], [serviceError.errorName, serviceError.errorTime, serviceError.errorPrice], errorSummary);
    let valid = true;

    if(!checkRequired(serviceInput.name.value)) {
        valid = false;
        serviceInput.name.classList.add("error-input");
        serviceError.errorName.innerText = "Field is required";
    } else if(!checkTextLengthRange(serviceInput.name.value, 2, 60)) {
        valid = false;
        serviceInput.name.classList.add("error-input");
        serviceError.errorName.innerText = "Service name must be in range 2-60";
    }

    if(!checkRequired(serviceInput.time.value)) {
        valid = false;
        serviceInput.time.classList.add("error-input");
        serviceError.errorTime.innerText = "Field is required";
    } else if(!checkDigit(serviceInput.time.value)) {
        valid = false;
        serviceInput.time.classList.add("error-input");
        serviceError.errorTime.innerText = "Time can't be negative!";
    } else if(!checkRange(serviceInput.time.value)) {
        valid = false;
        serviceInput.time.classList.add("error-input");
        serviceError.errorTime.innerText = "Time out of range";
    }

    if(!checkRequired(serviceInput.price.value)) {
        valid = false;
        serviceInput.price.classList.add("error-input");
        serviceError.errorPrice.innerText = "Field is required";
    } else if(!checkDigit(serviceInput.price.value)) {
        valid = false;
        serviceInput.price.classList.add("error-input");
        serviceError.errorPrice.innerText = "Price can't be negative!";
    } else if(!checkRange(serviceInput.price.value)) {
        valid = false;
        serviceInput.price.classList.add("error-input");
        serviceError.errorPrice.innerText = "Price out of range";
    }

    if(!valid) {
        errorSummary.innerText = "Form contains errors!";
    }

    return valid;
}