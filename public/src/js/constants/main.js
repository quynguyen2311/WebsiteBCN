const LOGIN_ERROR_MESSAGES = {
	"auth/wrong-password": "Sai mật khẩu, vui lòng thử lại!",
	"auth/user-not-found": "Tài khoản không tồn tại, vui lòng kiểm tra lại!",
	"auth/invalid-credential": "Thông tin đăng nhập không hợp lệ, vui lòng thử lại!",
	"auth/invalid-email": "Email không hợp lệ, vui lòng kiểm tra lại!",
	"auth/user-disabled": "Tài khoản đã bị vô hiệu hóa, vui lòng liên hệ hỗ trợ!",
	"auth/too-many-requests": "Quá nhiều yêu cầu đăng nhập, vui lòng thử lại sau!",
	"auth/network-request-failed": "Lỗi kết nối mạng, vui lòng kiểm tra lại!",
	default: "Đăng nhập không thành công! Lỗi: ",
};

const GET_USER_ERROR_MESSAGES = {
	USER_DATA_PATH_NOT_FOUND: "Không tìm thấy đường dẫn dữ liệu người dùng trong cookie.",
	DOCUMENT_NOT_FOUND: "Không tìm thấy DOCUMENT chứa tài liệu người dùng!",
	FETCH_ERROR: "Lỗi khi lấy dữ liệu người dùng từ cơ sở dữ liệu!",
};

const HASH_PASSWORD_CONSTANTS = {
	HASH_ALGORITHM: "SHA-256",
	TEXT_ENCODER: new TextEncoder(),
};

const LOGIN_COOKIE_CONFIG = {
	STORE_UID_EXPIRE: 5 * 60,
};

export { LOGIN_ERROR_MESSAGES, HASH_PASSWORD_CONSTANTS, LOGIN_COOKIE_CONFIG, GET_USER_ERROR_MESSAGES };
