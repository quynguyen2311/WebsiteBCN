import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBEYTw6TCZHC0IV3lIAEfkTAte-JHf6cJs",
  authDomain: "webbcn-3b6f6.firebaseapp.com",
  projectId: "webbcn-3b6f6",
  storageBucket: "webbcn-3b6f6.firebasestorage.app",
  messagingSenderId: "727862906440",
  appId: "1:727862906440:web:2a1354ad161d9b2d99527d",
  measurementId: "G-PP830PMJ5K"
};

// Khởi tạo Firebase app
const app = initializeApp(firebaseConfig);

// Khởi tạo Auth
const auth = getAuth(app);

// Xuất các module
export { app, auth };
