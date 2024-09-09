const endDate = new Date("7 Sep, 2024 08:35:00").getTime();
const startDate = new Date().getTime();

// Update the timer every second
let x = setInterval(function updateTimer() {

    const now = new Date().getTime();
    
    // Time conversions in milliseconds
    const millisecondsInSecond = 1000;                      // 1 second = 1000 milliseconds
    const millisecondsInMinute = 60 * millisecondsInSecond; // 1 minute = 60 seconds = 60 * 1000 milliseconds
    const millisecondsInHour = 60 * millisecondsInMinute;   // 1 hour = 60 minutes = 60 * 60 * 1000 milliseconds
    const millisecondsInDay = 24 * millisecondsInHour;      // 1 day = 24 hours = 24 * 60 * 60 * 1000 milliseconds
    
    // Calculate remaining time in milliseconds
    const distancePending = endDate - now;

    // Convert remaining time to days, hours, minutes, seconds
    const days = Math.floor(distancePending / millisecondsInDay);  // Full days remaining
    const hours = Math.floor((distancePending % millisecondsInDay) / millisecondsInHour);  // Full hours remaining after removing days
    const minutes = Math.floor((distancePending % millisecondsInHour) / millisecondsInMinute);  // Full minutes remaining after removing hours
    const seconds = Math.floor((distancePending % millisecondsInMinute) / millisecondsInSecond);  // Full seconds remaining after removing minutes

    // Update the HTML elements with calculated values
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Calculate progress bar percentage
    const totalDistance = endDate - startDate;  // Total time duration from start to end
    const distanceCovered = totalDistance - distancePending;  // Time already passed
    const percentageDistance = (distanceCovered / totalDistance) * 100;  // Percentage of time passed

    // Update progress bar width
    document.querySelector(".progress-bar").style.width = percentageDistance + "%";

    // If the countdown is over
    if (distancePending < 0) {
        clearInterval(x);  // Stop the timer
        document.querySelector(".countdown").innerHTML = "Expired";  // Display "Expired" message
        document.querySelector(".progress-bar").style.width = "100%";  // Set progress bar to 100%
    }

}, 1000);
