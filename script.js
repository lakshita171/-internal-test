function updateStats() {

    let total = document.querySelectorAll("#taskList li").length;

    let completed =
        document.querySelectorAll(
            "#taskList input:checked"
        ).length;

    let active = total - completed;

    document.getElementById("total").innerText = total;
    document.getElementById("completed").innerText = completed;
    document.getElementById("active").innerText = active;
}

function addTask() {

    let taskInput =
        document.getElementById("taskInput");

    let taskText = taskInput.value;

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
    <div>
        <input type="checkbox"
        onchange="completeTask(this)">
        ${taskText}
    </div>

    <button class="delete"
    onclick="deleteTask(this)">🗑</button>
    `;

    document.getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";

    updateStats();
}

function completeTask(checkbox){

    checkbox.parentElement.classList
    .toggle("completed");

    updateStats();
}

function deleteTask(button){

    button.parentElement.remove();

    updateStats();
}

updateStats();