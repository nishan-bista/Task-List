
  const userInput = document.querySelector("#inputFromUser");
  const addTaskButton = document.querySelector(".submit-button");
  const taskLists = document.querySelector(".addedTasks");

  addTaskButton.addEventListener("click", () => {

    if(userInput.value==""){
      alert("The task is Empyt!!")
    }
    else{

    // Created container body for list items div and delete icon
    const newItemBody = document.createElement("div");
    newItemBody.classList.add("list-items");
    taskLists.appendChild(newItemBody);

    // Creating div insdie container body for list data got from user
    const newItemContainer = document.createElement("div");
    newItemContainer.classList.add("item-container");
    newItemBody.appendChild(newItemContainer);

    // creating li and pushing it inside container body:child:div and appending the input text to li
    const itemList = document.createElement("li");
    const itemListData = document.createTextNode(userInput.value);
    itemList.appendChild(itemListData);

    // apending the child div inside container body div
    newItemContainer.appendChild(itemList);

    //creating delete icon  div and appending it to item body container
    const newDeleteIcon = document.createElement("div");
    newDeleteIcon.classList.add("delete-icon");
    newItemBody.appendChild(newDeleteIcon);

    // finally appending icon to the div created for icon 
    const newItemIcon = document.createElement("i");
    newItemIcon.classList.add("fa-solid", "fa-xmark");
    newDeleteIcon.appendChild(newItemIcon);

    //This clears the input when the add task is clicked
    userInput.value = "";
    }
  });

