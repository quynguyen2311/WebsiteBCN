const head = document.querySelector('head');
head.innerHTML += `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=VT323&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=VT323&display=swap" rel="stylesheet">
`

const body = document.querySelector('body');
body.innerHTML = `
<div class="homepage">
    <header class="header">
      <div class="wrapper">
        <svg width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="34.5" cy="35" r="34.5" fill="#D9D9D9" />
        </svg>
        <ul class="nav">
          <li><a id="home" href="#">Trang chủ</a></li>
          <li><a href="#">Bài viết</a></li>
          <li><a href="#">Năng lực</a></li>
          <li><a href="#">Hoạt động</a></li>
          <li><a href="#">Về chúng tôi</a></li>
        </ul>
        <div class="right">
          <div class="search-box">
            <svg width="331" height="50" viewBox="0 0 331 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="329" height="48" rx="24" fill="#EAE9EE" />
              <rect x="0.5" y="0.5" width="330" height="49" rx="24.5" stroke="white" stroke-opacity="0.4" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.813 14.8711L11.8369 10.8951C12.9205 9.56987 13.4532 7.87893 13.325 6.17198C13.1967 4.46502 12.4173 2.87267 11.1479 1.72427C9.87853 0.575873 8.21632 -0.0406994 6.50509 0.00208668C4.79386 0.0448727 3.16454 0.743743 1.95414 1.95414C0.743743 3.16454 0.0448727 4.79386 0.00208668 6.50509C-0.0406994 8.21632 0.575873 9.87853 1.72427 11.1479C2.87267 12.4173 4.46502 13.1967 6.17198 13.325C7.87893 13.4532 9.56987 12.9205 10.8951 11.8369L14.8711 15.813C14.9968 15.9344 15.165 16.0015 15.3397 16C15.5143 15.9985 15.6814 15.9284 15.8049 15.8049C15.9284 15.6814 15.9985 15.5143 16 15.3397C16.0015 15.165 15.9344 14.9968 15.813 14.8711ZM6.68251 12.0115C5.62855 12.0115 4.59825 11.6989 3.72191 11.1134C2.84556 10.5278 2.16254 9.69556 1.7592 8.72182C1.35587 7.74808 1.25034 6.6766 1.45595 5.64289C1.66157 4.60917 2.16911 3.65964 2.91437 2.91437C3.65964 2.16911 4.60917 1.66157 5.64289 1.45595C6.6766 1.25034 7.74808 1.35587 8.72182 1.7592C9.69556 2.16254 10.5278 2.84556 11.1134 3.72191C11.6989 4.59825 12.0115 5.62855 12.0115 6.68251C12.0099 8.09535 11.4479 9.44987 10.4489 10.4489C9.44987 11.4479 8.09535 12.0099 6.68251 12.0115Z"
                fill="#9E9E9E" />
            </svg>
            <input type="text">
          </div>
          <div class="avarta">
            <svg class="icon" width="90" height="66" viewBox="0 0 90 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="45" cy="33" r="32.5" fill="url(#paint0_linear_2457_1380)" fill-opacity="0.6"
                stroke="#F5F5F5" />
              <circle cx="45" cy="33" r="30.6176" stroke="#F5F5F5" />
              <path
                d="M44.7057 33.2938C45.4968 33.2938 46.2701 33.0592 46.9279 32.6197C47.5857 32.1802 48.0984 31.5555 48.4011 30.8246C48.7039 30.0937 48.7831 29.2894 48.6288 28.5135C48.4744 27.7376 48.0935 27.0249 47.5341 26.4655C46.9747 25.9061 46.2619 25.5251 45.486 25.3708C44.7101 25.2165 43.9059 25.2957 43.175 25.5984C42.4441 25.9012 41.8194 26.4138 41.3799 27.0716C40.9404 27.7294 40.7058 28.5028 40.7058 29.2939C40.7068 30.3544 41.1286 31.3712 41.8785 32.1211C42.6284 32.871 43.6452 33.2927 44.7057 33.2938ZM44.7057 26.6273C45.2331 26.6273 45.7487 26.7836 46.1872 27.0767C46.6257 27.3697 46.9675 27.7861 47.1693 28.2734C47.3711 28.7607 47.424 29.2968 47.3211 29.8141C47.2182 30.3314 46.9642 30.8065 46.5913 31.1794C46.2183 31.5524 45.7432 31.8063 45.2259 31.9092C44.7086 32.0121 44.1725 31.9593 43.6852 31.7575C43.198 31.5557 42.7815 31.2139 42.4885 30.7754C42.1955 30.3368 42.0391 29.8213 42.0391 29.2939C42.0391 28.5866 42.32 27.9084 42.8201 27.4083C43.3202 26.9082 43.9985 26.6273 44.7057 26.6273Z"
                fill="#757575" />
              <path
                d="M44.7057 34.6274C43.115 34.6292 41.5899 35.2619 40.4651 36.3867C39.3403 37.5115 38.7076 39.0366 38.7058 40.6273C38.7058 40.8041 38.776 40.9737 38.9011 41.0987C39.0261 41.2237 39.1957 41.2939 39.3725 41.2939C39.5493 41.2939 39.7188 41.2237 39.8439 41.0987C39.9689 40.9737 40.0391 40.8041 40.0391 40.6273C40.0391 39.3896 40.5308 38.2027 41.4059 37.3275C42.2811 36.4524 43.468 35.9607 44.7057 35.9607C45.9433 35.9607 47.1303 36.4524 48.0055 37.3275C48.8806 38.2027 49.3723 39.3896 49.3723 40.6273C49.3723 40.8041 49.4425 40.9737 49.5675 41.0987C49.6925 41.2237 49.8621 41.2939 50.0389 41.2939C50.2157 41.2939 50.3853 41.2237 50.5103 41.0987C50.6353 40.9737 50.7056 40.8041 50.7056 40.6273C50.7038 39.0366 50.0711 37.5115 48.9463 36.3867C47.8215 35.2619 46.2964 34.6292 44.7057 34.6274Z"
                fill="#757575" />
              <defs>
                <linearGradient id="paint0_linear_2457_1380" x1="22.0769" y1="10.8462" x2="68.3846" y2="54.3846"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.7" />
                  <stop offset="1" stop-color="#999999" stop-opacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
            <svg class="border_icon" width="82" height="82" viewBox="0 0 82 82" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="41" cy="41" r="33.5" transform="rotate(-90 41 41)" fill="url(#paint0_linear_1640_1252)"
                fill-opacity="0.6" />
              <circle cx="41" cy="41" r="33.5" transform="rotate(-90 41 41)" stroke="#18FFFF" stroke-width="3" />
              <circle cx="41" cy="41" r="33.5" transform="rotate(-90 41 41)" stroke="url(#paint1_linear_1640_1252)"
                stroke-opacity="0.3" stroke-width="3" />
              <g filter="url(#filter0_f_1640_1252)">
                <circle cx="41" cy="41" r="29.6176" stroke="#18FFFF" />
              </g>
              <circle cx="41" cy="41" r="30.6176" stroke="white" />
              <defs>
                <filter id="filter0_f_1640_1252" x="0.882324" y="0.882324" width="80.2354" height="80.2354"
                  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_1640_1252" />
                </filter>
                <linearGradient id="paint0_linear_1640_1252" x1="18.0769" y1="18.8462" x2="64.3846" y2="62.3846"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.7" />
                  <stop offset="1" stop-color="#999999" stop-opacity="0.2" />
                </linearGradient>
                <linearGradient id="paint1_linear_1640_1252" x1="10" y1="17" x2="74.9947" y2="20.4529"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </header>

    <div class="content">
      <div class="page page1">
        <div class="container">
          <h1>Muốn trở thành thành <br> viên Ban Công Nghệ?</h1>
          <br>
          <p>Bạn đang tìm kiếm những giải pháp công nghệ đột phá, sáng tạo và hiệu quả? Chúng tôi <br> luôn sẵn sàng
            chia sẻ kiến thức, kinh nghiệm và các sản phẩm tiên tiến để giúp bạn nắm <br> bắt xu hướng công nghệ mới nhất.</p>
            <br>
            <div class="button">
            <button>Liên hệ ngay
            </button>
            <button>Liên hệ ngay
            </button>
          </div>
        </div>
        <img class="image" src="./src/assets/img/index/page1/container/clipart1220779 1.png" alt="">
        <img class="page-footer" src="./src/assets/img/index/page1/footer/Footer.png">
      </div>
      <div class="page page2">
        <div class="container">
          <div class="text">
            <h1>Tuyển cộng tác viên ban <br> công nghệ</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br> Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an <br> unknown printer took a galley of type
              and
              scrambled it to make a type specimen <br> book.<br>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br> Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an <br> unknown printer took a galley of type
              and
              scrambled it to make a type specimen <br> book.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              <br> when an unknown printer took a galley of type and scrambled it to make a type <br> specimen book.
            </p>
          </div>
          <div class="box">
            <div class="top">
              <div class="part1">Sinh hoạt ban công <br> nghệ ngày 20/12</div>
              <div class="part2">Hỗ trợ đoàn khoa <br> chuẩn bị hội thao cấp <br> khoa</div>
              <div class="part3">Nghỉ tết âm lịch 2025</div>
              <div class="part4">Chuẩn bị thuyết trình <br> ngày hội việc làm</div>
            </div>
            <div class="bottom">
              <a>Xem thông báo cũ hơn</a>
            </div>
            <div class="image" src="" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="./src/assets/js/homepage.js"></script>
` + body.innerHTML;