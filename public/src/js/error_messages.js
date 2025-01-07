const LOGIN_ERROR_MESSAGES = {
    "auth/wrong-password": "Sai mật khẩu, vui lòng thử lại!",
    "auth/user-not-found": "Tài khoản không tồn tại, vui lòng kiểm tra lại!",
    "auth/invalid-credential": "Thông tin đăng nhập không hợp lệ, vui lòng thử lại!",
    "auth/too-many-requests": "Quá nhiều yêu cầu đăng nhập, vui lòng thử lại sau!",
    "auth/network-request-failed": "Lỗi kết nối mạng, vui lòng kiểm tra lại!",
    "default": "Đăng nhập không thành công! Lỗi: "
};

const REGISTER_ERROR_MESSAGES = {
    "auth/email-already-in-use": "Email đã được sử dụng, vui lòng thử email khác!",
    "auth/invalid-email": "Email không hợp lệ, vui lòng kiểm tra lại!",
    "auth/operation-not-allowed": "Đăng ký không được phép, vui lòng thử lại sau!",
    "auth/weak-password": "Mật khẩu quá yếu, vui lòng chọn mật khẩu mạnh hơn!",
    "auth/missing-email": "Thiếu email, vui lòng nhập email!",
    "auth/missing-password": "Thiếu mật khẩu, vui lòng nhập mật khẩu!",
    "default": "Đăng ký không thành công! Lỗi: "
};

export { LOGIN_ERROR_MESSAGES, REGISTER_ERROR_MESSAGES };