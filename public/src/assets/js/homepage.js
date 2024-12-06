
const avarta = document.querySelector('.avarta');
const border_icon = document.querySelector('.border_icon');
let rotateDeg = 0;
let rotateInterval;

avarta.addEventListener('mouseenter', () => {
    rotateInterval = setInterval(() => {
        rotateDeg = (rotateDeg + 1) % 360;
        border_icon.style.transform = `rotate(${rotateDeg}deg)`;
    }, 16); // approximately 60 frames per second
});

avarta.addEventListener('mouseleave', () => {
    border_icon.style.transform = `rotate(${rotateDeg}deg)`;
    border_icon.style.transition = '2s';
    setTimeout(() => {
        border_icon.style.transform = 'rotate(0deg)';
    }, 100);
    clearInterval(rotateInterval);
});