// this file will be for determining what function to run depending on user input

const startButton = document.querySelector(".start-game")
// const resumeButton = document.querySelector(".resume-game")

startButton.addEventListener("click",() => {
  console.log("clicked start button")
  window.location.href = "./pages/round.html"
})
