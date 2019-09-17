window.addEventListener("DOMContentLoaded", ()=> {

  const deleteItem = document.querySelector("span");
  deleteItem.style.display = "none";  

  let toDoList = document.querySelector("#to-do-list");
  let newItem = "";
  let toDoListArr = [];
  let randomeText = [ "Wow nothing to do! Awesome...", 
  "All done! Way to go", 
  "All empty here, wanna add something to do?",
  "Ready to chill? Cause there is nothing on this list" ];

  const randomeTextInput = document.querySelector(".randomText").firstChild;
  const addItem = document.querySelector("#submit");
  addItem.addEventListener("submit", addNewItem, false);
  
  
  rendom();
  
  // addeds a rendome text if List is emplty
  function rendom() {
    if (toDoListArr.length === 0) {
      randomeTextInput.style.display = "flex"
      let randomeTextIndex = Math.floor(Math.random() * randomeText.length);
      randomeTextInput.innerText = randomeText[Number(randomeTextIndex)];
    }
  }
  
  // Takes the Input Value and calls the showAddedItem().
  function addNewItem(e) {
    e.preventDefault();

    let input = document.querySelector("[name=todo]");
    newItem = input.value;
    input.value = "";
    showAddedItem();
  }
  
  // showAddedItem() adds the Input Value to the To Do List.
  function showAddedItem() {
    randomeTextInput.style.display = "none"
    
    if (newItem !== "") {
      let newItemLi = document.createElement("li");
      let closeButton = deleteItem.cloneNode(true);
      closeButton.style.display = 'inline-block';
      
      newItemLi.appendChild(document.createElement("p")).innerText = newItem;
      newItemLi.appendChild(closeButton)
      
      newItemLi.addEventListener("click", done, false);
      closeButton.addEventListener("click", deleteSelectedItem, false);
      
      toDoList.appendChild(newItemLi)
      toDoListArr.push(newItemLi);
    }
  }
  
  // Add done style when target is clicked.
  function done(event) {
    if (event.target.nodeName === "P") {
      event.target.classList.add("done");
    }
  }
  
  // delete Item of the List
  function deleteSelectedItem(e) {
    toDoListArr.pop(e.target.parentNode);
    e.target.parentNode.style.display = "none";
    rendom();
  }
  
});