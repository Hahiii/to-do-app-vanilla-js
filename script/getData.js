function getdata() {
    const data = JSON.parse(localStorage.getItem("ToDoItems"));
    
    return data ? data : [];
  }

  export default getdata