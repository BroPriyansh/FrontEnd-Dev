// Mouse Path Logger
const box = document.getElementById("trackBox");
const log = document.getElementById("coords");

box.addEventListener("mousemove", (e) => {
    log.textContent = `X: ${e.clientX} Y: ${e.clientY}`;
});

box.addEventListener("dblclick", (e) => {
    let dot = document.createElement("div");
    dot.style.position = "absolute";
    dot.style.width = "8px";
    dot.style.height = "8px";
    dot.style.background = "red";
    dot.style.borderRadius = "50%";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    document.body.appendChild(dot);
});
