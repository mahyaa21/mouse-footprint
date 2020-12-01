let number = 0;
let container = document.getElementById("container");
let newCircle;
function myFunction(event) {
    number++;
    var x = event.pageX;     // Get the horizontal coordinate
    var y = event.pageY;     // Get the vertical coordinate
    newCircle = document.createElement("div");
    var node = document.createTextNode(number);
    newCircle.appendChild(node);
    newCircle.classList.add("circle");
    newCircle.style.cssText = `top:${y}px;left:${x}px;`
    container.appendChild(newCircle);
}