import React, { useState } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Config/Firebase";
import "../App.css";



function TodoList({ taskList ,refreshList}) {
  //*********** useState *************************/
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetail, setTaskDetail] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDone, setTaskDone] = useState(false);


  //********************** createContext **************/
 

  //********************** function *********************************/

  function handleAddTask(value) {
    setIsAddClicked(value);
  }
 const toggleTask=(id)=>
 {

 }
  const submitNewTask = async (e) => {
     e.preventDefault();
    try {
      const taskRef = collection(db, "Tasks");
      
      let value = {
        title:  taskTitle ,
        date:  taskDate ,
        detail: taskDetail ,
        done: false,
      };
      
      await addDoc(taskRef, value);
      setTaskDate("")
      setTaskDetail("")
      setTaskTitle("")
      setTaskDone(false)
      setIsAddClicked(false)

      refreshList()
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
    
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex flex-column w-50 position-relative">
          <div className="d-flex  flex-row justify-content-between px-4">
            <h3>TO-DO</h3>
            <button
              style={{ background: "#7749F8", border: "none" }}
              className="px-4 rounded "
              onClick={() => handleAddTask(true)}
            >
              <MdOutlineAddTask style={{ }} />
            </button>
          </div>

          <ul className="w-100 ps-0 mt-2">
            {taskList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="list-style d-flex border-bottom py-1 justify-content-between align-items-center py-2"
                >
                    
                  <div className="d-flex gap-2" >
                    <input type="checkbox" checked={item.done} onChange={toggleTask}/>
                    <span className="font-weight-normal " style={{textDecoration: item.done?"line-through": "none"}}>
                      {item.title}
                    </span>
                  </div>
                  <div className=" px-2 py-0 rounded" style={{textDecoration: item.done?"line-through": "none"}}>{item.date}</div>
                </li>
              );
            })}
          </ul>
          {isAddClicked ? (
            <>
              <div
                className=" position-fixed z-3 top-0 start-0"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(2px)",
                  width: "100vw",
                  height: "100vh",
                }}
                onClick={() => handleAddTask(false)}
              >
                <div className="d-flex justify-content-center align-items-center h-75 w-100">
                  <form
                    onSubmit={submitNewTask}
                    className="d-flex flex-column justify-content-center gap-3 w-50 h-100 p-4 "
                    style={{
                      border: "1px solid #04070c",
                      background: "#031633",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3
                      className="align-self-center"
                      style={{ color: "#8391ae" }}
                    >
                      Add New Task
                    </h3>
                    <div className="formInputStyle">
                      <label htmlFor="taskTitle">Task Title:</label>
                      <input
                        type="text"
                        name="taskTitle"
                        maxLength={20}
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                      />
                    </div>
                    <div className="formInputStyle">
                      <label htmlFor="date">Task Date:</label>
                      <input
                        type="date"
                        name="date"
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                      />
                    </div>
                    <div className="formInputStyle">
                      <label htmlFor="taskDetail">Task Detail:</label>
                      <textarea
                        name="taskDetail"
                        rows="3"
                        cols="20"
                        maxLength={100}
                        value={taskDetail}
                        onChange={(e) => setTaskDetail(e.target.value)}
                      />
                    </div>

                    <button
                      className="w-50 align-self-center rounded"
                      style={{ background: "#7749F8" }}
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default TodoList;
