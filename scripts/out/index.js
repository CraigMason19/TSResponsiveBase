"use strict";
// DEBUG
document.addEventListener('keydown', function (event) {
    if (event.key === 'd' || event.key === 'D') {
        console.log("Debug mode enabled!");
        document.body.classList.toggle('show-borders');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    if (heading) {
        heading.textContent = "Hello from TypeScript!";
    }
});
function updateSize() {
    const widthElement = document.getElementById("width");
    const heightElement = document.getElementById("height");
    if (widthElement && heightElement) {
        widthElement.textContent = window.innerWidth.toString();
        heightElement.textContent = window.innerHeight.toString();
    }
}
window.addEventListener("resize", updateSize);
updateSize(); // Initial call
