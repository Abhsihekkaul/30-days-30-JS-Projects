let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.classList.contains('disabled')) {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.classList.add('disabled');
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                let winner = pos1val;
                console.log(`${winner} wins!`);
                // You can highlight the winning pattern or display the winner in a different way here
                boxes.forEach((box) => box.classList.add('disabled')); // Disable all boxes after a win
                return; // Exit the function once a winner is found
            }
        }
    }
}

