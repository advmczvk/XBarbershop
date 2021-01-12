function validateForm() {
    const appointmentInput = {
        date: document.getElementById('date'),
        client_id: document.getElementById('client_id'),
        service_id: document.getElementById('service_id')
    };
    const appointmentError = {
        errorDate: document.getElementById('errorDate'),
        errorClient_id: document.getElementById('errorClient_id'),
        errorService_id: document.getElementById('errorService_id')
    };
    const errorSummary = document.getElementById('errorsSummary');
    

    resetErrors([appointmentInput.date, appointmentInput.client_id, appointmentInput.service_id], [appointmentError.errorDate, appointmentError.errorClient_id, appointmentError.errorService_id], errorSummary);
    let valid = true;

    if(!checkRequired(appointmentInput.date.value)) {
        valid = false;
        appointmentInput.date.classList.add("error-input");
        appointmentError.errorDate.innerText = "Field is required";
    } else if(!checkDate(new Date(appointmentInput.date.value), new Date())) {
        valid = false;
        appointmentInput.date.classList.add("error-input");
        appointmentError.errorDate.innerText = "Date can't be in the past";
    }

    if(!checkRequired(appointmentInput.client_id.value)) {
        valid = false;
        appointmentInput.client_id.classList.add("error-input");
        appointmentError.errorClient_id.innerText = "Field is required";
    }

    if(!checkRequired(appointmentInput.service_id.value)) {
        valid = false;
        appointmentInput.service_id.classList.add("error-input");
        appointmentError.errorService_id.innerText = "Field is required";
    }
    
    if(!valid) {
        errorSummary.innerText = "Form contains errors!";
    }

    return valid;
}