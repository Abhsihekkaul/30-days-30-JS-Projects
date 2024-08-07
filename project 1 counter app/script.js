let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let counter = document.querySelector(".counter");

counter.innerHTML = 0;

function updateCounterColor() {
    if (parseInt(counter.innerHTML) < 0) {
        counter.style.color = "red";
    } else if (parseInt(counter.innerHTML) == 0) {
        counter.style.color = "black";
    } else {
        counter.style.color = "green";
    }
}

increase.addEventListener('click', () => {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    updateCounterColor();
});

decrease.addEventListener('click', () => {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    updateCounterColor();
});

reset.addEventListener('click', () => {
    counter.innerHTML = 0;
    updateCounterColor();
});

// Initialize the counter color on page load
updateCounterColor();
