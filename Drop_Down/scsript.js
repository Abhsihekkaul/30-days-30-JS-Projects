const drpDownIcon = document.querySelector(".drp-down");
const body = document.querySelector("body");

drpDownIcon.addEventListener("click", () => {
    // Get the actual width of the body
    const bodyWidth = body.clientWidth; 

    // Compare the width and change background color
    if (bodyWidth > 800) {
        body.style.backgroundColor = 'red'; 
    }
});
