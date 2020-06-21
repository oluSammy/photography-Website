
//this function makes the navigation bar responsive
const mobileNav = () => {
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
};
mobileNav();

//slide show
const allSlides = document.querySelectorAll('.slideshow__slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let counter = 0;


const changeSlide = (index) => {
    allSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    allSlides[index].classList.add('active');
};

const nextSlide = () => {
    if(counter == allSlides.length - 1){
        counter = 0;
    } else {
        counter++;
    }
    changeSlide(counter);
};


const prevSlide = () => {
    if(counter == 0){
        counter = allSlides.length - 1;
    } else {
        counter--;
    }
    changeSlide(counter);
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


setInterval(()=> {
    nextSlide();
}, 9000);