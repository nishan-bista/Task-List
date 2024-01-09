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
  } else {
    itemsContainer.appendChild(newItemByUser);
    newItemByUser.appendChild(deleteIcon);
  }
  // Reseting value after click to none
  inputFromUser.value = "";
});
itemsContainer.addEventListener("click",(e)=>{
  if (e.target.classList.contains("deleteButton")) {
    // Remove the parent list item when the delete icon is clicked
    e.target.parentElement.remove();}

})



