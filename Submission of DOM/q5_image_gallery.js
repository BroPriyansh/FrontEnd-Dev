// Image Gallery Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
    modal.style.display = "block";
    modalImg.src = src;
}

modal.addEventListener("click", () => modal.style.display = "none");
modalImg.addEventListener("click", (e) => e.stopPropagation());
