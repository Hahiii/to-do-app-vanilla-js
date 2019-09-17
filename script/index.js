window.addEventListener("DOMContentLoaded", ()=> {
  
  let toDoList = document.querySelector("#to-do-list");
  let toDoItems = document.querySelector("#to-do-list").children;
  let toDoListArr = [];
  let newItem = "";
  
  for (let i = 0; i < toDoList.length; i++) {
    toDoListArr.push(toDoList[i].firstChild.innerText);
  }
  
  const addItem = document.querySelector("#submit");
  addItem.addEventListener("click", addNewItem, false);
  
  function addNewItem() {
    let input = document.querySelector("[name=todo]");
    newItem = input.value;
    input.value = "";
    showAddedItem();
  }
  
  function showAddedItem() {
    if (newItem !== "") {
      toDoListArr.push(newItem)
      let newItemLi = document.createElement("li");
      toDoList.appendChild(newItemLi).appendChild(document.createElement("p")).innerText = newItem
    }
  }
  
  
});