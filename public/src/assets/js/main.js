const head = document.querySelector('head');
head.innerHTML += `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Ubuntu:wght@300;400;500;700&family=VT323&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
  <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
`;

let Data_ = '';
fetch('./pages/login.html')
  .then(response => response.text())
  .then(data => Data_ = data)
  .catch(error => console.error('Error fetching the login page:', error));

const bodyCode = document.body.innerHTML;

function log_out() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userUid");
  localStorage.removeItem("loginTime");
  window.location.reload();
}

function showSignin() {
  document.body.innerHTML = Data_ + bodyCode;
  const script_auth = document.createElement('script');
  script_auth.src = './src/assets/js/auth.js';
  script_auth.type = 'module';
  document.body.appendChild(script_auth);

  if (localStorage.getItem("User") && localStorage.getItem("Pass")) {
    document.getElementById("user").value = localStorage.getItem("User");
    document.getElementById("pass").value = localStorage.getItem("Pass");
    document.getElementById("remember").checked = true;
  }
}

function hieSignin() {
  window.location.reload();
}
