let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");
let result = document.getElementById("result");
rockBtn.addEventListener("click", function () {
    check("rock")
})
paperBtn.addEventListener("click", function () {
    check("paper")
})
scissorBtn.addEventListener("click", function () {
    check("scissor")
})
function check(playerchoice) {
    const choices = ["rock", "paper", "scissor"];
    const computer_choices = choices[Math.floor(Math.random() * 3)];
    if (playerchoice === computer_choices) {
        result.textContent = "It's a Tie";
    }
    else if ((playerchoice === "rock" && computer_choices === "scissor") || (playerchoice === "paper" && computer_choices === "rock") || (playerchoice === "scissor" && computer_choices === "paper")) {
        result.textContent = `You won! ${playerchoice} beats ${computer_choices}`;
    }
    else {
        result.textContent = `You lost! ${computer_choices} beats ${playerchoice}`;
    }
}