const computer = ["rock", "paper", "scissor"];
const user_input = document.querySelector(".user-input");
const textarea = document.querySelector("#textarea");
const result = document.querySelector(".result");
let user_result = document.querySelector(".user-result");
let computer_result = document.querySelector(".computer-result");
let resOfComputer = Number(computer_result.innerText);
let resOfUser = Number(user_result.innerText);
function handleClick(e) {
  let user_Choice = e.target.name;
  let computer_Choice = Math.floor(Math.random() * 3);
  if (resOfComputer + resOfUser < 5) {
    textarea.innerHTML = computer[computer_Choice];
    if (user_Choice === computer[computer_Choice]) {
      result.innerHTML = "Draw!!!";
    } else if (
      (user_Choice === "rock" && computer[computer_Choice] === "paper") ||
      (user_Choice === "paper" && computer[computer_Choice] === "scissor") ||
      (user_Choice === "scissor" && computer[computer_Choice] === "rock")
    ) {
      result.innerHTML = "Computer Wins ";
      computer_result.innerHTML = resOfComputer += 1;
    } else if (
      (user_Choice === "paper" && computer[computer_Choice] === "rock") ||
      (user_Choice === "scissor" && computer[computer_Choice] === "paper") ||
      (user_Choice === "rock" && computer[computer_Choice] === "scissor")
    ) {
      result.innerHTML = "You Win";
      user_result.innerHTML = resOfUser += 1;
    }
}
  if(resOfComputer+resOfUser===5){
    if(resOfComputer>resOfUser){
        alert(`Computer Wins Please restart to continue `)
    }
    else if (resOfComputer<resOfUser){
        alert(`You Win Please restart to continue `)
    }
}
 else{
    return ;
 }
}

user_input.addEventListener("click", (e) => handleClick(e));
