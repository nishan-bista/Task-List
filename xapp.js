const inputFromUser = document.querySelector("#inputFromUser");

const addTaskButton = document.querySelector("#addTask");
const itemsContainer = document.querySelector(".list-items");

let deleteButton = document.querySelector(".deleteButton");

// Event listner for add task button
addTaskButton.addEventListener("click", () => {
  // creating listitem with value got from user
  const newItemByUser = document.createElement("li");
  newItemByUser.textContent = inputFromUser.value;

  // creating delete icon everytime li is created
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  deleteIcon.classList.add("deleteButton");

  // checking if the input is empty or not if not appending the data
  if (inputFromUser.value === "") {
    alert("Task is empty. Cannot be added!!");
  } else if(inputFromUser.value.toLowerCase().includes("fuck") ||inputFromUser.value.toLowerCase().includes("pussy") ||inputFromUser.value.toLowerCase().includes("vagina") || inputFromUser.value.toLowerCase().includes("puti")|| inputFromUser.value.toLowerCase().includes("lado")||inputFromUser.value.toLowerCase().includes("chikne")||inputFromUser.value.toLowerCase().includes("muji") ||
  inputFromUser.value.toLowerCase().includes("mugi")||
  inputFromUser.value.toLowerCase().includes("mg")||inputFromUser.value.toLowerCase().includes("pedo")){
    alert("Inappropriate word Detected, Not allowed")

  }
  else
  {
    itemsContainer.appendChild(newItemByUser);
    newItemByUser.appendChild(deleteIcon);
  }
  // Reseting value after click to none
  inputFromUser.value = "";
});
itemsContainer.addEventListener("click", (e) => {
  // console.log(e.target) ---Ignore

  // Remove the parent list item when the delete icon is clicked
  if (e.target.classList.contains("deleteButton")) {
    e.target.parentElement.remove();
  }
});
