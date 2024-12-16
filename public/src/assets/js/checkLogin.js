import { auth } from './firebase.js';
import { onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const avatarElement = document.querySelector('.avatar__in');

// Hàm xóa dữ liệu đăng nhập
function clearLoginData() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userUid");
  localStorage.removeItem("loginTime");
}

// Hàm cập nhật avatar
function updateAvatar(imageUrl) {
  while (avatarElement.firstChild) {
    avatarElement.removeChild(avatarElement.firstChild);
  }
  avatarElement.style.backgroundImage = `url(${imageUrl})`;
  avatarElement.style.backgroundSize = 'cover';
  avatarElement.style.backgroundPosition = 'center';
}

// Kiểm tra trạng thái đăng nhập
function checkLoginStatus() {
  const userEmail = localStorage.getItem("userEmail");
  const userUid = localStorage.getItem("userUid");
  const loginTime = localStorage.getItem("loginTime");

  // Kiểm tra dữ liệu localStorage
  if (!userEmail || !userUid || !loginTime) {
    console.log("Chưa đăng nhập");
    avatarElement.setAttribute('onclick', 'showSignin()'); // Gán chuỗi hàm
    return;
  }

  // Kiểm tra thời gian phiên đăng nhập
  const elapsedTime = new Date().getTime() - parseInt(loginTime);
  if (elapsedTime > 15 * 60 * 1000) {
    clearLoginData();
    console.log("Phiên đăng nhập đã hết hạn. Đã xóa dữ liệu.");
    avatarElement.setAttribute('onclick', 'showSignin()');
    return;
  }

  // Kiểm tra trạng thái đăng nhập Firebase
  onAuthStateChanged(auth, (user) => {
    if (user && user.email === userEmail && user.uid === userUid) {
      console.log(`Mã sinh viên: ${userEmail.replace('@gmail.com', '')}`);
      avatarElement.setAttribute('onclick', 'log_out()'); // Gán chuỗi hàm
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

// Hàm hiển thị form đăng nhập (placeholder)
function showSignin() {
  console.log("Hiển thị form đăng nhập");
}

// Hàm đăng xuất (placeholder)
function log_out() {
  console.log("Đăng xuất người dùng");
  clearLoginData();
  avatarElement.setAttribute('onclick', 'showSignin()');
}

// Gọi hàm kiểm tra trạng thái đăng nhập
checkLoginStatus();
