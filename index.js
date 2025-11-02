

// function for mobile header
function closeArea() {
    document.querySelector(".areahidden").classList.toggle("areashow")
    document.querySelector(".overlay-hidden").classList.toggle("overlay-show")
    document.querySelector("body").classList.toggle("body_show");

}

// function for pop_up

function pop_up() {
    document.querySelector(".pop_up").classList.toggle("pop_up_show");
    document.querySelector("body").classList.toggle("body_show");


}
const pop_upTimeout = setTimeout(pop_up, 3000);



// -----------faq section -----------------
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
    });
});


// -------slider js -------------
let SliderButtonclick = 0;
function updateSliderPostion() {
    if (SliderButtonclick < 7 && SliderButtonclick >= 0) {
        document.querySelector(
            ".slider-scroll>ul:nth-child(1)"
        ).style.transform = `translateX(-${SliderButtonclick * 18.85}vw)`;
        document.querySelector(".loader>div").style.width = `${(SliderButtonclick + 1) * 14.2857
            }%`;
    } else if (SliderButtonclick < 0) {
        SliderButtonclick = 0;
    } else {
        SliderButtonclick = SliderButtonclick - 1;
    }
}

function sliderMoveRight() {
    SliderButtonclick = SliderButtonclick + 1;
    updateSliderPostion();
}

function sliderMoveLeft() {
    SliderButtonclick = SliderButtonclick - 1;
    updateSliderPostion();
}

    





