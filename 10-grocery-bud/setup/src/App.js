import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      //display alert
      showAlert(true, "danger", "Please enter Value");
    } else if (task && isEditing) {
      //deal with edit
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: task };
          }
          return item;
        })
      );
      setTask("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "Changes Saved");
    } else {
      //show alert
      showAlert(true, "success", "Task Added to the List");
      const newItem = { id: new Date().getTime().toString(), title: task };
      setList([...list, newItem]);
      setTask("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "All Tasks Cleared");
    setList([]);
  };
  const removeTask = (id) => {
    showAlert(true, "danger", "Task Removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editTask = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setTask(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} removeAlert={showAlert} list={list}></Alert>
        )}
        <h3>Todo List</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your task here"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Add Task"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeTask={removeTask} editTask={editTask}></List>
          <button className="clear-btn" onClick={clearList}>
            Clear
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
