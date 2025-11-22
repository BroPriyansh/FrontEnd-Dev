// Live Character Counter
const textarea = document.getElementById("text");
const counter = document.getElementById("counter");

textarea.addEventListener("input", (e) => {
    let len = textarea.value.length;
    let remaining = 100 - len;

    counter.textContent = remaining;

    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "yellow";
    } else if (remaining <= 0) {
        counter.style.color = "red";
        if (len > 100) e.preventDefault();
    } else {
        counter.style.color = "black";
    }
});

function resetText() {
    textarea.value = "";
    counter.textContent = 100;
    counter.style.color = "black";
}
