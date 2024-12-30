// ID: alert001
function Alert(title, detail, timeout = 3000) {
    const alertContainer = document.createElement('div');
    alertContainer.className = 'alert-container';
    alertContainer.id = 'alert001';

    const alertTitle = document.createElement('strong');
    alertTitle.textContent = title;
    alertContainer.appendChild(alertTitle);

    const alertDetail = document.createElement('span');
    alertDetail.textContent = ` ${detail}`;
    alertContainer.appendChild(alertDetail);

    document.body.appendChild(alertContainer);

    setTimeout(() => {
        document.body.removeChild(alertContainer);
    }, timeout);
}

export default Alert;
