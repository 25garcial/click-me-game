for (var i = 0; i < 10; i++) {
  var spot = document.createElement("div")
  spot.classList.add("columns")
  document.body.appendChild(spot)
}
for (var i = 0; i < 10; i++) {
  for (var o = 0; o < 10; o++) {
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
    document.querySelectorAll(".columns")[i].appendChild(spot)
  }
}
document.querySelectorAll(".spot")[Math.floor(Math.random()) * 100].textContent = "click me"
