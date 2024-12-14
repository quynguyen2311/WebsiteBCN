const container = document.querySelector(".container");
const pages = document.querySelectorAll(".page");
let currentPage = "";

container.addEventListener("scroll", () => {
    let foundPage = Array.from(pages).find(page => {
        const rect = page.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
    })?.id;

    if (foundPage && foundPage !== currentPage) {
        currentPage = foundPage;
        document.querySelectorAll('.index').forEach(index => index.classList.remove('active'));
        document.getElementById(currentPage.replace('page', 'index')).classList.add('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById(this.getAttribute('href').substring(1)).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
