const toggleButton = document.querySelector("#theme")
const themeChange = document.querySelector(".themeChange")
const heading = document.getElementsByClassName("heading")[0]
const headingLink = document.getElementById("headingLink")
const toggleIcon = document.querySelector(".far")
const emailInput = document.querySelector("#emailInput")
const subscribeBtn = document.querySelector("#subscribeBtn")

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark")
  heading.classList.toggle("dark2")
  toggleButton.classList.toggle("dark")
  headingLink.classList.toggle("whiteText")
  console.log(toggleButton.classList)
  if (toggleIcon.classList.contains("fa-moon")) {
    toggleIcon.classList.replace("fa-moon", "fa-sun")
  } else {
    toggleIcon.classList.replace("fa-sun", "fa-moon")
  }
})

subscribeBtn.addEventListener("click", function () {
  const emailText = emailInput.value
  console.log(emailText)
  if (emailText !== "") {
    alert("You have successfully subscribed!")
  }
})
