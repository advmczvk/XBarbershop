function validateForm() {
    const appointmentInput = {
        date: document.getElementById('date'),
        client_id: document.getElementById('client_id'),
        service_id: document.getElementById('service_id')
    };
    const appointmentError = {
        errorDate: document.getElementById('errorDate'),
        errorclient_id: document.getElementById('errorClient_id'),
        errorservice_id: document.getElementById('errorService_id')
    };
    const errorSummary = document.getElementById('errorsSummary');
    

    resetErrors([appointmentInput.date, appointmentInput.client_id, appointmentInput.service_id], [appointmentError.errorDate, appointmentError.errorclient_id, appointmentError.errorservice_id], errorSummary);
    let valid = true;

    if(!checkRequired(appointmentInput.date.value)) {
        valid = false;
        appointmentInput.date.classList.add("error-input");
        appointmentError.errordate.innerText = "Field is required";
    } else if(!checkTextLengthRange(appointmentInput.date, new Date())) {
        valid = false;
        appointmentInput.date.classList.add("error-input");
        appointmentError.errordate.innerText = "Date can't be in the past";
    }

    if(!checkRequired(appointmentInput.client_id.value)) {
        valid = false;
        appointmentInput.client_id.classList.add("error-input");
        appointmentError.errorclient_id.innerText = "Field is required";
    }

    if(!checkRequired(appointmentInput.service_id.value)) {
        valid = false;
        appointmentInput.service_id.classList.add("error-input");
        appointmentError.errorservice_id.innerText = "Field is required";
    }
    
    if(!valid) {
        errorSummary.innerText = "Form contains errors!";
    }

    return valid;
}