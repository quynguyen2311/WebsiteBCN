// Danh sách các ký tự đặc biệt cần thay thế.
const escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
};

// Đầu ra là chuỗi đã được thay thế các ký tự đặc biệt để ngăn chặn tấn công XSS.
function validXSS(str) {
    return str.replace(/[&<>"'/]/g, match => escape[match]);
}

export { validXSS };