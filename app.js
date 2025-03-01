document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const dataTable = document.getElementById("dataTable");

    inputText.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && inputText.value.trim() !== "") {
            event.preventDefault();
            addTask(inputText.value);
            inputText.value = ""; 
        }
    });

    function addTask(task) {
        const row = dataTable.insertRow(-1);
        const cellTask = row.insertCell(0);
        const cellDelete = row.insertCell(1);

        cellTask.textContent = task;

        const deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "🗑️";
        deleteIcon.style.cursor = "pointer";

        deleteIcon.addEventListener("click", function () {
            row.remove();
        });

        cellDelete.appendChild(deleteIcon);
    }
});