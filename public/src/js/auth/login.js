import handleLogin from "../handlers/handleLogin.js";
import { loginButton } from "../constants/loginDomElements.js";

loginButton.addEventListener("click", handleLogin);