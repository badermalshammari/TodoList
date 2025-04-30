let addTaskButton = document.getElementById("addTaskButton");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let emptyMessage = document.getElementById("emptyMessage");

function updateEmptyMessage() {
  if (taskList.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create list item
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // Toggle completed when clicked
    newTask.addEventListener("click", function() {
      newTask.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(event) {
      event.stopPropagation(); // So clicking delete doesn't mark as completed
      newTask.remove();
      updateEmptyMessage(); // Check if list became empty
    });

    // Add delete button to task
    newTask.appendChild(deleteBtn);

    // Add task to the list
    taskList.appendChild(newTask);

    // Clear input
    taskInput.value = "";

    // Hide "No tasks yet" message
    updateEmptyMessage();
  }
});

// When page loads, check if empty
updateEmptyMessage();