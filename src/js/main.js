let number = 0;
let container = document.getElementById("container");
let newCircle;
function myFunction(event) {
    number++;
    var x = event.pageX;     // Get the horizontal coordinate
    var y = event.pageY;     // Get the vertical coordinate
    newCircle = document.createElement("div");
    newCircle.setAttribute("id", `node${number}`);
    var node = document.createTextNode(number);
    newCircle.appendChild(node);
    let newStyle = (number % 5 === 0) ? "orange-circle" : "circle";
    newCircle.classList.add(newStyle);
    newCircle.style.cssText = `top:${y}px;left:${x}px;`
    container.appendChild(newCircle);
}

window.addEventListener("resize", displayWindowSize);
function displayWindowSize() {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    let newWidth, newHeight;
    for (let i = 1; i <= number; i++) {
        let node = document.getElementById(`node${i}`);
        newWidth = Math.floor(Math.random() * (w - 100));
        newHeight = Math.floor(Math.random() * (h - 100));
        node.style.top = `${newHeight}px`;
        node.style.left = `${newWidth}px`;
    }
}