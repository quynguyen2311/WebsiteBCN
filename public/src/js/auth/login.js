import { auth } from "../configs/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import Alert from "../components/Alert/Alert.js";

const loginButton = document.getElementById("login_button");
const usernameInput = document.getElementById("user");
const passwordInput = document.getElementById("pass");
const rememberCheckbox = document.getElementById("remember");

const ERROR_MESSAGES = {
    "auth/wrong-password": "Sai mật khẩu, vui lòng thử lại!",
    "auth/user-not-found": "Tài khoản không tồn tại, vui lòng kiểm tra lại!",
    "default": "Đăng nhập không thành công! Lỗi: "
};

const handleLogin = async (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        Alert("Lỗi đăng nhập", "Vui lòng nhập đầy đủ thông tin đăng nhập.");
        return;
    }

    const email = `${username}@gmail.com`;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        saveUserInfo(user, username);
        window.location.href = "./index.html";
    } catch (error) {
        handleLoginError(error);
    }
};

const saveUserInfo = (user, username) => {
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userUid", user.uid);
    localStorage.setItem("loginTime", new Date().getTime());

    if (rememberCheckbox.checked) {
        localStorage.setItem("User", username);
    } else {
        localStorage.removeItem("User");
    }
};

const handleLoginError = (error) => {
    console.error("Lỗi đăng nhập:", error);

    const errorMessage = ERROR_MESSAGES[error.code] || `${ERROR_MESSAGES.default}${error.message}`;
    Alert("Lỗi đăng nhập", errorMessage, 3000, "red", "red");

    localStorage.removeItem("User");
};

loginButton.addEventListener("click", handleLogin);
