const navbar = document.querySelector('.nav-bar');
const span = document.querySelectorAll('.linha');

navbar.addEventListener('click', move);
let atual = 0;
function move() {
    atual++
    if (atual % 2 === 1) {
        for (let i = 0; i < span.length; i ++) {
            span[0].style.transform = 'rotate(45deg) translate(15px, 20px)';
            span[0].style.transition = .3 + 's';
            span[1].style.transform = 'scale(0)';
            span[1].style.transition = .3 + 's';
            span[2].style.transform = 'rotate(-45deg) translate(13px, -20px)';
            span[2].style.transition = .3 + 's';
            // navbar.style.transition = .3 + 's';
            // navbar.style.transform = 'translatex(8px)';
        }
    } else {
        for (let i = 0; i < span.length; i ++) {
            span[0].style.transform = 'rotate(0deg) translate(0px, 0px)';
            span[0].style.transition = .3 + 's';
            span[1].style.transform = 'scale(1)';
            span[1].style.transition = .3 + 's';
            span[2].style.transform = 'rotate(0deg) translate(0px, 0px)';
            span[2].style.transition = .3 + 's';
            navbar.style.transform = 'translate(0px)';
        }
    }
}