window.addEventListener("DOMContentLoaded", ()=> {
  
  let toDoList = document.querySelector("#to-do-list");
  let toDoItems = document.querySelector("#to-do-list").children;
  let toDoListArr = [];
  let newItem = "";
  console.log(toDoItems)
  for (let i = 0; i < toDoList.length; i++) {
    toDoList[i].addEventListener("click", done, false);
    toDoListArr.push(toDoList[i].firstChild.innerText);
  }
  for (let i = 0; i < toDoItems.length; i++) {
    toDoItems[i].addEventListener("click", done, false);
  }
  
  const addItem = document.querySelector("#submit");
  addItem.addEventListener("click", addNewItem, false);

  // Takes the Input Value and calls the showAddedItem().
  function addNewItem() {
    let input = document.querySelector("[name=todo]");
    newItem = input.value;
    input.value = "";
    showAddedItem();
  }
  // showAddedItem() adds the Input Value to the To Do List.
  function showAddedItem() {
    if (newItem !== "") {
      toDoListArr.push(newItem)
      let newItemLi = document.createElement("li");
      toDoList.appendChild(newItemLi).appendChild(document.createElement("p")).innerText = newItem;
  console.log(toDoItems)

    }
  }
  
  // Add done style when target is clicked.
  function done(event) {
    if (event.target.nodeName === "P") {
      event.target.classList.add("done");
    }
    
  }
  
});