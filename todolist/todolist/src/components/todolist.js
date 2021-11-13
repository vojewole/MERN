import React, { cloneElement, useState } from "react";

const TodoList = () => {
  const [todoItem, setTodoItem] = useState({task:"", isComplete:false});
  const [todoList, setTodoList] = useState([]);
  

  const addItemToTodoListHandler = (e) => {
    e.preventDefault();
    const newTodoList = [...todoList, todoItem];
    setTodoList(newTodoList);
  };

  const editTodoItemHandler = (e) => {
    let newItem = {
      task: e.target.value,
      isComplete: false
    }
    setTodoItem(newItem);
  }

  const editItemInTodoListHandler = (e) =>
  {
    let idx = e.target.value;
    // let selectedItem = todoList[idx];
    // selectedItem.isComplete = !selectedItem.isComplete;
    // console.log(selectedItem);
    // let filterTodoList = todoList.filter((item) => todoList.indexOf(item) != idx)
    // console.log(filterTodoList);
    // setTodoList([...filterTodoList, selectedItem])
    todoList[idx].isComplete = !todoList[idx].isComplete
    setTodoList([...todoList])


  }

  const deleteItemListHandler = (e) =>
  {
    let idx = e.target.value;
    let filterTodoList = todoList.filter((item) => todoList.indexOf(item) != idx)
    setTodoList([...filterTodoList])
  }
  
  const buttonStyle = {
    backgroundColor: "blue",
    width: "100px",
    borderRadius: "50px",
    fontSize: "20px",
  };

  const todoItemStyle = {
    backgroundColor: "gray",
    border: "1px solid black",
    color: "black",
    width: "200px",
    borderRadius: "50px",
  };

  const todoItemDoneStyle = {
    backgroundColor: "gray",
    border: "1px solid black",
    color: "black",
    width: "200px",
    borderRadius: "50px",
    textDecoration: "line-through"
  };

  return (
    <div>
      <div>
        {todoList.map((item, index) => (
          <div key={index} style={{display:"flex", justifyContent:"center"}}>
            <p style={item.isComplete? todoItemDoneStyle: todoItemStyle}>
              {item.task}
            </p>
            <input 
              type="checkbox" 
              value={index}
              checked={item.isComplete} 
              onChange={editItemInTodoListHandler}
            ></input>
            <button 
              value={index}
              onClick={deleteItemListHandler} 
              style={buttonStyle}>Delete</button>
          </div>
        ))}
      </div>
      <form onSubmit={addItemToTodoListHandler}>
        <input
          type="text"
          value={todoItem.task}
          onChange={editTodoItemHandler}
        ></input>
        <button style={buttonStyle}>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
