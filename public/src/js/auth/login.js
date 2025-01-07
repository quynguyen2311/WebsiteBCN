import { auth } from "../configs/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import Alert from "../components/Alert/Alert.js";
import { LOGIN_ERROR_MESSAGES } from "../error_messages.js";

const loginButton = document.getElementById("login_button");
const usernameInput = document.getElementById("user");
const passwordInput = document.getElementById("pass");
const rememberCheckbox = document.getElementById("remember");

const handleLogin = async (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        Alert("Lỗi đăng nhập", "Vui lòng nhập đầy đủ thông tin đăng nhập.", 3000, "red", "red");
        return;
    }

    const email = `${username}@gmail.com`;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        storeUser(userCredential.user, username);
        window.location.href = "./index.html";
    } catch (error) {
        handleLoginError(error);
    }
};

const storeUser = (user, username) => {
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
    const errorMessage = LOGIN_ERROR_MESSAGES[error.code] || `${LOGIN_ERROR_MESSAGES.default}${error.message}`;
    Alert("Lỗi đăng nhập", errorMessage, 3000, "red", "red");
    localStorage.removeItem("User");
};

loginButton.addEventListener("click", handleLogin);