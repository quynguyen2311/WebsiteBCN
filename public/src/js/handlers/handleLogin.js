import { auth } from "../configs/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import Alert from "../components/Alert/Alert.js";
import { validateUsername, validatePassword } from "../validate/login.js";
import { validXSS } from "../validate/xss.js";
import { LOGIN_ERROR_MESSAGES } from "../constants/errorMessages.js";
import { usernameInput, passwordInput, rememberCheckbox } from "../constants/loginDomElements.js";

const handleLogin = async (event) => {
    event.preventDefault();

    const username = validXSS(usernameInput.value.trim());
    const password = validXSS(passwordInput.value);

    if (!validateUsername(username) || !validatePassword(password)) {
        Alert("Lỗi đăng nhập", "Vui lòng nhập đầy đủ thông tin đăng nhập.", 3000, "red", "red");
        return;
    }

    const email = `${username}@gmail.com`;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        window.location.href = "./index.html";
    } catch (error) {
        handleLoginError(error);
    }
};

const handleLoginError = (error) => {
    const errorMessage = LOGIN_ERROR_MESSAGES[error.code] || `${LOGIN_ERROR_MESSAGES.default}${error.message}`;
    Alert("Lỗi đăng nhập", errorMessage, 3000, "red", "red");
    localStorage.removeItem("User");
};

export default handleLogin;
