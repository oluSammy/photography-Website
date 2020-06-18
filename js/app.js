const hamburger = document.querySelector('.nav__burger');
const mobileNav = document.querySelector('.mobile-nav');
const hamburgerTop = document.querySelector('.nav__burger--top');
const hamburgerMid = document.querySelector('.nav__burger--mid');
const hamburgerBottom = document.querySelector('.nav__burger--bottom');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');

    if(mobileNav.classList.contains('show')){
        mobileNav.style.transform = 'translateX(0)';
        mobileNav.style.transition = 'transform .6s ease-in-out';

        hamburgerMid.style.opacity = 0;
        hamburgerTop.style.transform = 'rotate(45deg) translateY(.9rem)';
        hamburgerBottom.style.transform = 'rotate(-45deg) translateY(-.9rem)';


    } else {
        mobileNav.style.transform = 'translateX(-100%)';
        mobileNav.style.transition = 'transform .6s ease-in-out';

        hamburgerMid.style.opacity = 1;
        hamburgerTop.style.transform = 'rotate(0) translateY(0)';
        hamburgerBottom.style.transform = 'rotate(0) translateY(0)';
    }
})