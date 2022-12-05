let body = document.querySelector("body")

let nara =  (e) => {
    let cham = document.createElement("div")
    cham.classList.add("move")
    body.appendChild(cham)
    cham.style.transition = "all linear .05s"
    cham.style.left = e.clientX + "px"
    cham.style.top = e.clientY + "px"
    cham.style.left = cham.offsetLeft + "px"
    cham.style.visibility = "hidden"
}

document.addEventListener("mousemove",nara)



// create div in javascript = document.createElement("tag name")
// input class in create div in javascript = variable name.classList,add("class name")
// show creating div in html body =  body.appendChild(variable name)