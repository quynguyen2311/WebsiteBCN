import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEYTw6TCZHC0IV3lIAEfkTAte-JHf6cJs",
  authDomain: "webbcn-3b6f6.firebaseapp.com",
  projectId: "webbcn-3b6f6",
  storageBucket: "webbcn-3b6f6.firebasestorage.app",
  messagingSenderId: "727862906440",
  appId: "1:727862906440:web:2a1354ad161d9b2d99527d",
  measurementId: "G-PP830PMJ5K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login_button").addEventListener("click", async (event) => {
  event.preventDefault();
  const email = `${document.getElementById("user").value}@gmail.com`;
  const password = document.getElementById("pass").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userUid", user.uid);
    localStorage.setItem("loginTime", new Date().getTime());

    if (document.getElementById("remember").checked) {
      localStorage.setItem("User", document.getElementById("user").value);
      localStorage.setItem("Pass", password);
    } else {
      localStorage.removeItem("User");
      localStorage.removeItem("Pass");
    }

    window.location.reload();
  } catch (error) {
    localStorage.removeItem("User");
    localStorage.removeItem("Pass");
    alert("Đăng nhập không thành công!");
  }
});
