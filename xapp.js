const prag = document.querySelector(".prag");

let userInputName = prompt("Welcome, Please enter your name.");

while (!userInputName) {
  userInputName = prompt("Please Enter.");
}

userInputName =
  userInputName.substring(0, 1).toUpperCase() + userInputName.substring(1);

const username = document.querySelector(".username");
username.textContent = `Hello, ${userInputName}`;

prag.textContent = `Please feel free to use your tasklist.`;

setTimeout(() => {
  prag.remove();
}, 3000);

const inputFromUser = document.querySelector("#inputFromUser");
const addTaskButton = document.querySelector("#addTask");
const itemsContainer = document.querySelector(".list-items");
const deleteButton = document.querySelector(".deleteButton");
const checkButton = document.querySelector(".checkButton");

const popUp = document.querySelector(".pop-up");

// Event listner for add task button
addTaskButton.addEventListener("click", () => {
  // creating listitem with value got from user
  const newItemByUser = document.createElement("li");
  newItemByUser.textContent = inputFromUser.value;

  //creating div element for delet-check icon
  const divForDC = document.createElement("div");
  divForDC.classList.add("check-delete");

  // creating delete icon everytime li is created
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash", "deleteButton");

  //creating check icon
  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fa-solid", "fa-check", "checkButton");
  saveTasksToLocalStorage();

  // checking if the input is empty or not if not appending the data
  if (inputFromUser.value === "") {
    popUp.style.backgroundColor = "#d3d3d3";
    popUp.style.fontSize = "20px";
    popUp.innerHTML = `<p>Sorry,${userInputName} Task cannot be empty!!</p>`;

    setTimeout(() => {
      popUp.innerHTML = "";

      popUp.style.backgroundColor = "transparent";
    }, 3000);
  } else if (
    inputFromUser.value.toLowerCase().includes("fuck") ||
    inputFromUser.value.toLowerCase().includes("pussy") ||
    inputFromUser.value.toLowerCase().includes("vagina") ||
    inputFromUser.value.toLowerCase().includes("puti") ||
    inputFromUser.value.toLowerCase().includes("lado") ||
    inputFromUser.value.toLowerCase().includes("chikne") ||
    inputFromUser.value.toLowerCase().includes("muji") ||
    inputFromUser.value.toLowerCase().includes("mugi") ||
    inputFromUser.value.toLowerCase().includes("mg") ||
    inputFromUser.value.toLowerCase().includes("pedo")
  ) {
    popUp.innerHTML = `<p>Sorry ${userInputName} it Contains Inappropriate word!! Task cannot be added.</p>`;

    popUp.style.backgroundColor = "#d3d3d3";
    popUp.style.fontSize = "16px";

    setTimeout(() => {
      popUp.innerHTML = "";

      popUp.style.backgroundColor = "transparent";
    }, 3000);
  } else {

    itemsContainer.appendChild(newItemByUser);
    newItemByUser.appendChild(divForDC);
    divForDC.appendChild(checkIcon);
    divForDC.appendChild(deleteIcon);

    // Save tasks to local storage
    saveTasksToLocalStorage();
  }
  // Reseting value after click to none
  inputFromUser.value = "";
});

itemsContainer.addEventListener("click", (e) => {
  // console.log(e.target) ---Ignore

  // Remove the parent list item when the delete icon is clicked
  if (e.target.classList.contains("deleteButton")) {
    e.target.parentElement.parentElement.remove();
    saveTasksToLocalStorage();
  }
  if (e.target.classList.contains("checkButton")) {
    e.target.parentElement.parentElement.classList.toggle("checked");
    saveTasksToLocalStorage();
  }
});

// Save tasks to local storage
function saveTasksToLocalStorage() {
  const tasks = Array.from(itemsContainer.children).map(
    (item) => item.textContent
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage on page load
function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  const tasks = storedTasks ? JSON.parse(storedTasks) : [];

  tasks.forEach((task) => {
    const newItemByUser = document.createElement("li");
    newItemByUser.textContent = task;

    const divForDC = document.createElement("div");
    divForDC.classList.add("check-delete");

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash", "deleteButton");

    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa-solid", "fa-check", "checkButton");

    itemsContainer.appendChild(newItemByUser);
    newItemByUser.appendChild(divForDC);
    divForDC.appendChild(checkIcon);
    divForDC.appendChild(deleteIcon);
  });
}

// Load tasks from local storage on page load
loadTasksFromLocalStorage();
