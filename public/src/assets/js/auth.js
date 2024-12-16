import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

document.getElementById("login_button").addEventListener("click", async (event) => {
  event.preventDefault();
  
  const username = document.getElementById("user").value.trim();
  const password = document.getElementById("pass").value;

  if (!username || !password) {
    alert("Vui lòng nhập đầy đủ thông tin đăng nhập.");
    return;
  }

  const email = `${username}@gmail.com`;

  try {
    // Xử lý đăng nhập với Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userUid", user.uid);
    localStorage.setItem("loginTime", new Date().getTime());

    if (document.getElementById("remember").checked) {
      // Lưu username vào localStorage (không lưu mật khẩu để đảm bảo an toàn)
      localStorage.setItem("User", username);
    } else {
      // Xóa thông tin lưu trữ khi không chọn "Remember me"
      localStorage.removeItem("User");
    }

    // Cập nhật giao diện hoặc chuyển hướng
    window.location.href = "./index.html"; // Chuyển hướng đến trang index
  } catch (error) {
    // Xử lý lỗi đăng nhập chi tiết
    console.error("Lỗi đăng nhập:", error);

    const errorMessage = {
      "auth/wrong-password": "Sai mật khẩu, vui lòng thử lại!",
      "auth/user-not-found": "Tài khoản không tồn tại, vui lòng kiểm tra lại!"
    }[error.code] || `Đăng nhập không thành công! Lỗi: ${error.message}`;

    alert(errorMessage);

    // Xóa thông tin tài khoản không hợp lệ
    localStorage.removeItem("User");
  }
});
