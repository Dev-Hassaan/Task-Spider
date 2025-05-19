import { Container } from 'react-bootstrap'
import './App.css'
import UserNavBar from './components/UserNavBar'
import UserProgressBar from './components/UserProgressBar'
import UserToDoList from './components/UserToDoList'
import FloatingPlus from './components/FloatingPlus'
import UserDialogeBox from './components/UserDialogeBox'
import { useState } from 'react'

function App() {

  const [modalShow, setModalShow] = useState(false);
  const [listData, seLlistData] = useState(
    [{ id: 1, title: "First Task", description: "This is First Task To Do" , badge: "High", isChecked: true },
    { id: 2, title: "Second Task", description: "This is Second Task To Do" , badge: "Medium", isChecked: false },
    { id: 3, title: "Third Task", description: "This is Third Task To Do" , badge: "Low" , isChecked: false},]
  );

  function addListItem() {
    const title = document.getElementById('todo_title').value;
    const description = document.getElementById('todo_description').value;
    const newItem = {
      id: listData.length + 1,
      title: title,
      description: description,
      badge: "none",
      isChecked: false,
    }
    seLlistData([...listData, newItem]);
    setModalShow(false);
  }

  function checklist() {
    let count = 0
    listData.forEach(function(item, index) {
      if (item.isChecked == true) {
        count++;
      }
    });
    
    return Math.round(count / listData.length * 100)
  }

  function handleCheck(e, i) {
    const isChecked = e.target.checked
    listData[i].isChecked = isChecked
    seLlistData([...listData])
  }



  return (
    <>
      <UserNavBar></UserNavBar>
      <Container>
        <div className="mt-4 pt-3 mb-4">
          <UserProgressBar min={0} max={100} now={checklist()}  />
        </div>
        <div className="mb-4">
          <h1 className='h1'>To-Do</h1>
        </div>
        <div className="">
          <UserToDoList list={listData} handleCheck={handleCheck}></UserToDoList>
        </div>
      </Container>
      <FloatingPlus handleModal={setModalShow} ></FloatingPlus>
      <UserDialogeBox
        show={modalShow}
        onHide={() => setModalShow(false)}
        addItem={addListItem}
      ></UserDialogeBox>
    </>
  )
}

export default App
