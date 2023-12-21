// Start Header And Landing

let toggle = document.querySelector(".toggle");
let iconOne = document.querySelector(".toggle i:first-of-type");
let iconTwo = document.querySelector(".toggle i:last-of-type");
let navBar = document.querySelector("nav .container ul");
let landing = document.querySelector(".landing");

toggle.onclick = function () {
    iconOne.classList.toggle("trans1");
    iconTwo.classList.toggle("trans2");
    navBar.classList.toggle("height");
    landing.classList.toggle("move");
}

let balls = document.querySelectorAll(".track span");
let landingTrack = document.querySelector(".landing .slider .slider-track");
let landingBox = document.querySelectorAll(".landing .slider .slider-track .box");

balls.forEach(
    (value, index) => {
        value.addEventListener("click", function() {
            landingTrack.style.transform = `translateX(-${(index * 100) / 3}%)`
            balls.forEach(
                (value) => {
                    value.classList.remove("active");
                    this.classList.add("active");
                }
            )
        })
    }
);

// End Header And Landing

// Start Client

{
    let sliderTrack = document.querySelector(".client .slider .slider-track");
    let boxes = document.querySelectorAll(".client .slider .slider-track .box");
    let next = document.querySelector(".client #next");
    let prev = document.querySelector(".client #prev");
    let counter = 0;
    next.onclick = () => {

        if (next.classList.contains("disabled")) {
            return false;
        } else {
            counter--;
            sliderTrack.style.transform = `translateX(${(100 / boxes.length) * counter}%)`;
            checker();
        }
    }

    prev.onclick = () => {
        if (prev.classList.contains("disabled")) {
            return false;
        } else {
            counter++;
            sliderTrack.style.transform = `translateX(${(100 / boxes.length) * counter}%)`;
            checker();
        }
    }

    checker();

    function checker() {
        counter == 0 ? prev.classList.add("disabled") : prev.classList.remove("disabled");
        counter == -boxes.length + 2 ? next.classList.add("disabled") : next.classList.remove("disabled");
    }
}


// End Client

// Start Google Map API