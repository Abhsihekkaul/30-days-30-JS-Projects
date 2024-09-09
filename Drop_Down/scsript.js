const body = document.querySelector("body");
const navItems = document.querySelector('ul');
const dropButton = document.querySelector('.drp-down-btn');

let dropdownInitialized = false;

// Function to handle dropdown menu behavior
function initializeDropdown() {
    if (!dropdownInitialized) {
        dropButton.addEventListener('click', function() {
            navItems.style.display = "block";
            navItems.style.height = "auto";
            navItems.style.width = "100%";
            navItems.style.border = "2px solid white";
        });
        dropdownInitialized = true;
    }
}

// Function to check screen width and apply styles
function checkScreenWidth(query) {
    if (query.matches) {
        body.style.backgroundColor = 'red';
        initializeDropdown(); // Ensure dropdown event is only initialized once
    } else {
        body.style.backgroundColor = ''; // Reset background color
        navItems.style.display = ''; // Reset dropdown menu display
        navItems.style.height = '';
        navItems.style.width = '';
        navItems.style.border = '';
    }
}

// Media query listener for better performance
const mediaQuery = window.matchMedia('(max-width: 700px)');
checkScreenWidth(mediaQuery); // Initial check on page load
mediaQuery.addListener(checkScreenWidth); // Listen for changes in screen width
