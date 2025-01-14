import Alert from "../components/Alert/Alert.js";
import { validateMSSV, validatePassword } from "../validate/login.js";
import { validXSS } from "../validate/xss.js";
import { LOGIN_ERROR_MESSAGES, LOGIN_COOKIE_CONFIG } from "../constants/main.js";
import { MSSVInput, passwordInput, rememberCheckbox } from "../constants/loginDomElement.js";
import { db, collection, getDoc, doc } from "../configs/firebase.js";
import { hashPassword } from "../utils/hash.js";
import { setCookie } from "../utils/cookie.js";
import { getUserData } from "./handleGetUserData.js";

async function handleLogin(event) {
	event.preventDefault();

	const data = {
		mssv: validXSS(MSSVInput.value.trim()),
		pwd: validXSS(passwordInput.value),
		rem: rememberCheckbox.checked,
	};

	if (!validateMSSV(data.mssv) || !validatePassword(data.pwd)) {
		showLoginError("Vui lòng nhập đầy đủ thông tin đăng nhập.");
		return;
	}

	try {
		data.pwd = await hashPassword(data.pwd);
		await performLogin(data);
	} catch (err) {
		handleLoginError(err);
	}
}

function showLoginError(msg) {
	Alert("Lỗi đăng nhập", msg, 3000, "red", "red");
}

async function performLogin(data) {
	const userDoc = await getDoc(doc(collection(db, "users"), data.mssv));
	if (!userDoc.exists()) {
		showLoginError("Tài khoản không tồn tại.");
		return;
	}

	const userLoginData = userDoc.data();
	if (userLoginData.passwordHashed !== data.pwd) {
		showLoginError("Mật khẩu không đúng.");
		return;
	}

	const UID = data.mssv;
	setCookie("UID", UID, LOGIN_COOKIE_CONFIG.STORE_UID_EXPIRE);

	// DEMO
	const { name } = await getUserData();
	Alert("Đăng nhập thành công", `Chào mừng ${name} quay trở lại!`, 3000, "green", "green");
}

function handleLoginError(err) {
	const errMsg = LOGIN_ERROR_MESSAGES[err.code] || `${LOGIN_ERROR_MESSAGES.default}${err.message}`;
	Alert("Lỗi đăng nhập", errMsg, 3000, "red", "red");
}

export default handleLogin;
