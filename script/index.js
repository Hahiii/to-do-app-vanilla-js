import ToDoItem from './toDoItem.js';
import getdata from './getData.js';
import { displayRandomMessage } from './uiHelpers.js';

window.addEventListener("DOMContentLoaded", ()=> {
  const toDoList = document.querySelector("#to-do-list");
  const deleteItem = document.querySelector(".close");
  const addItem = document.querySelector("#submit");
  let toDoListArr = getdata();
  
  addItem.addEventListener("submit", getNewItemInputValue, false);
  toDoListArr.forEach(element => {
    displayItems(element.text, element)
  }); 

  displayRandomMessage(toDoListArr.length);
  
  // Takes the Input Value.
  function getNewItemInputValue(e) {
    e.preventDefault();
    let input = document.querySelector("[name=todo]");
    
    newItemObject(input.value);
    input.value = "";
  }
  
  // adds the Input Value to the To Do List.
  function newItemObject(newToDoValue) {
    if (newToDoValue !== "") {
      const item = new ToDoItem(newToDoValue);
      
      toDoListArr.push(item);
      displayItems(newToDoValue, item);
    }
  }
  
  // display item on the list
  function displayItems(inputValue, itemObj) {
    displayRandomMessage(toDoListArr.length);
    
    let closeButton = deleteItem.cloneNode(true);
    closeButton.style.display = 'inline-block';
    let newItemLi = document.createElement("li");
    
    newItemLi.dataset.id = itemObj.id
    newItemLi.appendChild(document.createElement("p")).innerText = inputValue;
    newItemLi.appendChild(closeButton);
    newItemLi.addEventListener("click", done, false);
    closeButton.addEventListener("click", deleteSelectedItem, false);
    
    if (itemObj.isDone) {
      newItemLi.firstChild.classList = "done";
    }
    
    toDoList.appendChild(newItemLi)
    localStorage.setItem("ToDoItems", JSON.stringify(toDoListArr));
  }
  
  // Add style done
  function done(event) {
    if (event.target.nodeName === "P") {
      event.target.classList.add("done");
      for (let i = 0; i < toDoListArr.length; i++) {
        if (toDoListArr[i].id == event.target.parentNode.dataset.id) {
          toDoListArr[i].isDone = true;
          localStorage.setItem("ToDoItems", JSON.stringify(toDoListArr));
        } 
      }
    }
  }
  
  // delete Item from the List
  function deleteSelectedItem(event) {
    for (let i = 0; i < toDoListArr.length; i++) {
      if (toDoListArr[i].id == event.target.parentNode.dataset.id) {
        toDoListArr.splice(i, 1);
      } 
    }
    
    toDoList.removeChild(event.target.parentNode)
    localStorage.setItem("ToDoItems", JSON.stringify(toDoListArr));
    
    displayRandomMessage(toDoListArr.length);
  }
  
});