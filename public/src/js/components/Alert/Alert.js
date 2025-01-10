function createAlertContainer() {
    const alertContainer = document.createElement('div');
    alertContainer.className = 'alert-container webComponent';
    alertContainer.id = 'alert001';
    return alertContainer;
}

function createAlertTitle(title, titleColor) {
    const alertTitle = document.createElement('strong');
    alertTitle.textContent = title;
    alertTitle.style.color = titleColor;
    return alertTitle;
}

function createAlertDetail(detail, detailColor) {
    const alertDetail = document.createElement('p');
    alertDetail.textContent = ` ${detail}`;
    alertDetail.style.color = detailColor;
    return alertDetail;
}

function removeExistingAlert() {
    const existingAlert = document.getElementById('alert001');
    if (existingAlert) {
        document.body.removeChild(existingAlert);
    }
}

function showAlert(alertContainer, timeout) {
    document.body.appendChild(alertContainer);
    setTimeout(() => {
        alertContainer.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(alertContainer);
        }, 500);
    }, timeout);
}

function Alert(title, detail, timeout = 3000, titleColor = "black", detailColor = "black") {
    removeExistingAlert();
    const alertContainer = createAlertContainer();
    alertContainer.appendChild(createAlertTitle(title + ":", titleColor));
    alertContainer.appendChild(createAlertDetail(detail, detailColor));
    showAlert(alertContainer, timeout);
}

export default Alert;
