// Real-Time Table Filter
const search = document.getElementById("search");
const rows = document.querySelectorAll("#studentTable tbody tr");
const msg = document.getElementById("noResult");

search.addEventListener("input", () => {
    let text = search.value.toLowerCase();
    let visible = 0;

    rows.forEach(row => {
        let content = row.textContent.toLowerCase();
        if (content.includes(text)) {
            row.style.display = "";
            visible++;
        } else row.style.display = "none";
    });

    msg.style.display = visible ? "none" : "block";
});
