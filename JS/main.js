//Scroll top
const scroll = document.querySelector(".scroll-top-button");
let intervalId, isScrolling;
function scrollStep(size) {
    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    requestAnimationFrame(()=> {window.scroll(0, window.pageYOffset - size)});
}
function scrollToTop() {
    const size = (window.pageYOffset / 50 < 70) ? 70 : window.pageYOffset / 50;
    console.log(window.pageYOffset);
    intervalId = setInterval(() => {scrollStep(size)}, 20);
}
scroll.addEventListener("click", scrollToTop);
window.addEventListener('scroll', function ( event ) {
    window.clearTimeout( isScrolling );
    isScrolling = setTimeout(function() {
        if (window.pageYOffset >= 500 && scroll.classList.contains("d-none")) {
            scroll.classList.remove("d-none");
            return;
        }
        if (window.pageYOffset < 500 && !scroll.classList.contains("d-none")) {
            scroll.classList.add("d-none");
            return;
        }
    }, 66);
}, false);

//Slider without animation
const sliderPicker = document.querySelector(".footer__slider-picker");
const sliderContainer = document.querySelector(".footer__slides");
const firstSlide = document.querySelector(".footer__slide");
window.addEventListener("resize", () => {
    const firstDot = document.querySelector(".footer__slider-dot");
    const active = document.querySelector(".footer__slider-dot--active");
    firstSlide.style.marginLeft = "0px";
    if(!firstDot.classList.contains("footer__slider-dot--active")) {
        active.classList.remove("footer__slider-dot--active");
        firstDot.classList.add("footer__slider-dot--active");
    }
});
sliderPicker.addEventListener("click", (e) => {
    if(!e.target.getAttribute("data-index")) {return;}
    const number = e.target.getAttribute("data-index");
    const active = document.querySelector(".footer__slider-dot--active");
    active.classList.toggle("footer__slider-dot--active");
    e.target.classList.toggle("footer__slider-dot--active");
    firstSlide.style.marginLeft = -(sliderContainer.getBoundingClientRect().width * (number - 1)) + "px";
});

//links preventDefault
window.onload = function() {
    const anchors = document.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return false;};
    }
};
