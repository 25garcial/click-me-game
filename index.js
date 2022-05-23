for(var i=0; i<10; i++){
    var spot=document.createElement("div")
    spot.classList.add("x")
    document.body.apendChild(spot)
}
for(var i=0; i<10; i++){
    var spot=document.createElement("div")
    spot.classList.add("y")
    document.body.querySelectorAll(".x")[i].appendChild(spot)
}
