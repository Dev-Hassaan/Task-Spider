import { useEffect, useState } from 'react'
import { collection,getDocs } from 'firebase/firestore';
import {db} from './Config/Firebase'

import Form from 'react-bootstrap/Form';
import TodoList from './Components/TodoList';
import './App.css'

function App() {
  const[taskList, setTaskList] = useState([])
  useEffect(()=>{
        getTasks()
  },[])

  const getTasks = async () => {
      try {
        const taskRef = collection(db, "Tasks");
        
        const snapShot = await getDocs(taskRef)
        const taskLists = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
         
        setTaskList(taskLists);
     
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <>
    <div style={{ minHeight: "100vh", minWidth:"100vw", background:'#031633',color:'white' }}>
      <TodoList taskList={taskList} refreshList = {getTasks}/>
    </div>
     
       
    </>
  )
}

export default App
