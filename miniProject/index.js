let userScore = 0
let compScore = 0 

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector(".msg")
const userSpera = document.querySelector("#user-score")
const compSpera = document.querySelector("#computer-score")

const showWinner = (userWin) =>{
    if (userWin){
        userScore++
        userSpera.innerText = userScore 
        console.log("You win")
        msg.innerText = "You win😀!"
        msg.style.backgroundColor = "green"
        msg.style.color = "white"
    }
    else{
        compScore++
        compSpera.innerText = compScore 
        console.log("You lose")
        msg.innerText = "You lose😥"
        msg.style.backgroundColor = "red"
        msg.style.color = "white"
    }
}

const draw = () =>{
    msg.innerText = "You was draw ! try again😒"
    msg.style.backgroundColor = "yellow"
    msg.style.color = "black"

}

const genComputerChoice = () =>{
    const options = ["rock","paper", "scissors"]
    const rendIdx = Math.floor( Math.random() * 3 )
    return options[rendIdx]
}

const playGame = ( userChoice) =>
{
    console.log("user choice = ", userChoice)
    //Generate computer choice 
    const compChoice = genComputerChoice()
    console.log("comp choice =", compChoice)
    if (userChoice === compChoice){
        draw ()
    }
    else {
        let userWin = true
        if (userChoice === "rock"){
            userWin = compChoice === "paper"? false :true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors"?false : true ;
        }
        else{
            userWin = compChoice === "rock"?false : true ; 
        }
        showWinner (userWin)
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame (userChoice)
    })
})


