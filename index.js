for (var i = 0; i < 100; i++) {
  let spot = document.createElement("div")
  spot.classList.add("spot")
  spot.addEventListener("click", function() {
    console.log("triggered")
    if (this.textContent == "click me") {
      this.textContent = "";
      console.log("succeded")
      let random = Math.floor(Math.random() * 100)
      document.querySelectorAll(".spot")[random].textContent = "click me"
      console.log(random)
    }
  })
  document.querySelector(".container").appendChild(spot)

}
document.querySelectorAll(".spot")[Math.floor(Math.random()) * 100].textContent = "click me"
