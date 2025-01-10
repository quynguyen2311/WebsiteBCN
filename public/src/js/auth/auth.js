const avatarElement = document.querySelector('.avatar__in');

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
}

checkLoginStatus();