// Form Submit Blocker
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("password");

    if (name.value.trim() === "") {
        valid = false;
        name.nextElementSibling.textContent = "Name required";
    } else name.nextElementSibling.textContent = "";

    if (!email.value.includes("@")) {
        valid = false;
        email.nextElementSibling.textContent = "Invalid email";
    } else email.nextElementSibling.textContent = "";

    if (pass.value.length < 6) {
        valid = false;
        pass.nextElementSibling.textContent = "Min 6 chars required";
    } else pass.nextElementSibling.textContent = "";

    if (valid) document.getElementById("success").textContent = "Form Submitted Successfully!";
});
