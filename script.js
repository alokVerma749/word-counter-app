let inputField = document.querySelector("#input");
let preview = document.querySelector(".preview");

inputField.addEventListener("input", function () {
    // Word Counter
    var words = document.getElementById("input").value;
    document.getElementById("content").innerText =
        `
    Total character = ${words.length}
    Total Words = ${words.split(" ").length} `;

    // Preview Window
    if (inputField.value != "") {
        preview.classList.remove("hidden");
    } else {
        preview.classList.add("hidden");
        document.getElementById("content").innerText = "";
    }
    preview.innerText = words;
});