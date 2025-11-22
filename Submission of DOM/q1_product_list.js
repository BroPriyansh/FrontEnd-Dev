// Dynamic Product List Manager
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");

productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains("edit")) {
        let li = e.target.parentElement;
        let currentText = li.firstChild.textContent.trim();

        let input = document.createElement("input");
        input.value = currentText;
        li.firstChild.replaceWith(input);
        input.focus();

        const save = () => {
            let newText = input.value;
            input.replaceWith(document.createTextNode(newText));
            document.removeEventListener("click", outsideHandler);
        };

        const outsideHandler = (event) => {
            if (!li.contains(event.target)) save();
        };

        document.addEventListener("click", outsideHandler);
    }
});

function addProduct() {
    if (productInput.value.trim() === "") return;
    let li = document.createElement("li");
    li.innerHTML = productInput.value + 
    ' <button class="edit">Edit</button> <button class="delete">Delete</button>';
    productList.appendChild(li);
    productInput.value = "";
}
