import Alert from "../components/Alert/Alert.js";
import { validateUsername, validatePassword } from "../validate/login.js";
import { validXSS } from "../validate/xss.js";
import { LOGIN_ERROR_MESSAGES } from "../constants/main.js";
import { accountInput, passwordInput, rememberCheckbox } from "../constants/loginDomElement.js";
import { db } from "../configs/firebase.js";
import { collection, getDoc, doc } from "../configs/firebase.js";
import { hashPassword } from "../utils/hash.js";

async function handleLogin(event) {
	event.preventDefault();

	const data = {
		acc: validXSS(accountInput.value.trim()),
		pwd: validXSS(passwordInput.value),
		rem: rememberCheckbox.checked,
	};

	if (!(validateUsername(data.acc) && validatePassword(data.pwd))) {
		showLoginError("Vui lòng nhập đầy đủ thông tin đăng nhập.");
		return;
	}

	data.pwd = await hashPassword(data.pwd);
	performLogin(data);
}

function showLoginError(msg) {
	Alert("Lỗi đăng nhập", msg, 3000, "red", "red");
}

function performLogin(data) {
	const loginInfoCol = collection(db, "loginInfo");
	const userDoc = doc(loginInfoCol, data.acc);
	getDoc(userDoc)
		.then((doc) => {
			if (!doc.exists()) {
				showLoginError("Tài khoản không tồn tại.");
				return;
			}
			const userLoginData = doc.data();
			if (userLoginData.passwordHashed !== data.pwd) {
				showLoginError("Mật khẩu không đúng.");
				return;
			}
			Alert("Đăng nhập thành công", "Chào mừng bạn trở lại!", 3000, "green", "green");
		})
		.catch((err) => {
			handleLoginError(err);
		});
}

function handleLoginError(err) {
	const errMsg = LOGIN_ERROR_MESSAGES[err.code] || `${LOGIN_ERROR_MESSAGES.default}${err.message}`;
	Alert("Lỗi đăng nhập", errMsg, 3000, "red", "red");
}

export default handleLogin;
