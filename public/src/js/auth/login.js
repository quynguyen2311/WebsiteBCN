import handleLogin from "../handlers/handleLogin.js";
import { loginButton } from "../constants/loginDomElement.js";

loginButton.addEventListener("click", handleLogin);