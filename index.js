

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



var countDownDate = new Date("Jan 5, 2026 23:59:59").getTime();

var countdownFunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<span style='color:red;'>Offer Ended</span>";
    }
}, 1000);

// function for accordian

function acc(e) {
    let para = e.target.parentElement;
    para.classList.toggle("show");
}

// function for faq section

function faq_section(e) {
    let fAq = e.target.parentElement;
    fAq.classList.toggle("faqshow")

    // document.querySelector(".question").classList.toggle("faqshow");



}
