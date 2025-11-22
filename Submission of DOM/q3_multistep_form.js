// Multi-Step Form
let step = 1;

function showStep(n) {
    document.querySelectorAll(".step").forEach((s) => s.style.display = "none");
    document.getElementById("step" + n).style.display = "block";
}

function nextStep() {
    if (!validate(step)) return;
    step++;
    showStep(step);
}

function prevStep() {
    step--;
    showStep(step);
}

function validate(s) {
    if (s === 1) return document.getElementById("name").value.trim() !== "";
    if (s === 2) return document.getElementById("email").value.includes("@");
    if (s === 3) return document.getElementById("password").value.length >= 6;
}

function finish() {
    if (!validate(3)) return;
    document.getElementById("summary").innerHTML =
        "Name: " + name.value + "<br>Email: " + email.value;
}
showStep(1);
