// Custom Dropdown
const btn = document.getElementById("dropdownBtn");
const list = document.getElementById("options");

btn.addEventListener("click", () => {
    list.style.display = list.style.display === "block" ? "none" : "block";
});

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        btn.textContent = e.target.textContent;
        list.style.display = "none";
    }
});

document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !list.contains(e.target)) {
        list.style.display = "none";
    }
}, true);
