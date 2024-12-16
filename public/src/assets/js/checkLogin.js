import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";


const avatarElement = document.querySelector('.avatar__in');
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function clearLoginData() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userUid");
  localStorage.removeItem("loginTime");
}

function updateAvatar(imageUrl) {
  while (avatarElement.firstChild) {
    avatarElement.removeChild(avatarElement.firstChild);
  }
  avatarElement.style.backgroundImage = `url(${imageUrl})`;
  avatarElement.style.backgroundSize = 'cover';
  avatarElement.style.backgroundPosition = 'center';
}

function checkLoginStatus() {
  const userEmail = localStorage.getItem("userEmail");
  const userUid = localStorage.getItem("userUid");
  const loginTime = localStorage.getItem("loginTime");

  if (!userEmail || !userUid || !loginTime) {
    console.log("Chưa đăng nhập");
    avatarElement.setAttribute('onclick', 'showSignin()');
    return;
  }

  const elapsedTime = new Date().getTime() - parseInt(loginTime);
  if (elapsedTime > 15 * 60 * 1000) {
    clearLoginData();
    console.log("Phiên đăng nhập đã hết hạn. Đã xóa dữ liệu.");
    avatarElement.setAttribute('onclick', 'showSignin()');
    return;
  }

  onAuthStateChanged(auth, (user) => {
    if (user && user.email === userEmail && user.uid === userUid) {
      console.log(`Ma sinh viên: ${userEmail.replace('@gmail.com', '')}`);
      avatarElement.setAttribute('onclick', 'log_out()');
      const imageUrl = `https://res.cloudinary.com/dja3ehblp/image/upload/A${userEmail.replace('@gmail.com', '')}.jpg`;
      console.log(`URL ảnh đại diện: ${imageUrl}`);
      updateAvatar(imageUrl);
    } else {
      clearLoginData();
      console.log("Thông tin không hợp lệ. Đã xóa dữ liệu.");
      avatarElement.setAttribute('onclick', 'showSignin()');
    }
  });
}

checkLoginStatus();
document.currentScript.parentNode.removeChild(document.currentScript);