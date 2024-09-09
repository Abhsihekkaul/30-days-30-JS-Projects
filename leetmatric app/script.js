document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.querySelector("#search-btn");
    const userNameInput = document.querySelector("#user-input");
    const statsContainer = document.querySelector(".stats-container");

    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");

    // Use `#` for ids in querySelector
    const easyLabel = document.querySelector("#easy-label");
    const mediumLabel = document.querySelector("#medium-label");
    const hardLabel = document.querySelector("#hard-label");

    function validateUserName(username) {
        if (username.trim() === "") {
            alert("Username cannot be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    function updateUserProgress(solved, total, label, circle) {
        if (!label || !circle) {
            console.error("Label or Circle not found"); // Error handling
            return;
        }

        const progressDegree = (solved / total) * 100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(parsedData) {
        const easySolved = parsedData.easySolved || 0;
        const mediumSolved = parsedData.mediumSolved || 0;
        const hardSolved = parsedData.hardSolved || 0;

        const totalEasyQuestions = parsedData.totalEasy || 1;
        const totalMediumQuestions = parsedData.totalMedium || 1;
        const totalHardQuestions = parsedData.totalHard || 1;

        updateUserProgress(easySolved, totalEasyQuestions, easyLabel, easyProgressCircle);
        updateUserProgress(mediumSolved, totalMediumQuestions, mediumLabel, mediumProgressCircle);
        updateUserProgress(hardSolved, totalHardQuestions, hardLabel, hardProgressCircle);
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Unable to fetch the user details");
            }

            const parsedData = await response.json();
            console.log("logging data:", parsedData);

            displayUserData(parsedData);
        } catch (error) {
            statsContainer.innerHTML = `<p>No Data Found</p>`;
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    searchButton.addEventListener('click', function() {
        const username = userNameInput.value;
        if (validateUserName(username)) {
            fetchUserDetails(username);
        }
    });

});
