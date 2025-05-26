import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { setLocalStorage, getLocalStorage } from './utilities/LocalStorage'
import './App.css'
import UserNavBar from './components/UserNavBar'
import UserProgressBar from './components/UserProgressBar'
import UserToDoList from './components/UserToDoList'
import FloatingPlus from './components/FloatingPlus'
import UserDialogeBox from './components/UserDialogeBox'


function App() {


  const [modalShow, setModalShow] = useState(false);
  const [listData, setListData] = useState(
    [{ id: 1, title: "Write Your First Task", description: "Click the plus button to add more tasks", badge: "High", isChecked: true },]
  );
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "dark");

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme)
    localStorage.setItem("Theme", theme)
  }, [theme])

  useEffect(() => {
    setListData(getLocalStorage() || listData)
  }, [])

  function addListItem() {
    const title = document.getElementById('todo_title').value;
    const description = document.getElementById('todo_description').value;
    const newItem = {
      id: listData ? listData.length + 1 : 1,
      title: title,
      description: description,
      badge: "none",
      isChecked: false,
    }
    const updatedList = listData ? [...listData, newItem] : [newItem]
    setListData(updatedList)
    setLocalStorage(updatedList)
    setModalShow(false);
    document.getElementById('todo_title').value = '';
    document.getElementById('todo_description').value = '';
  }

  function checklist() {
    let count = 0
    if (listData) {
      listData.forEach(function (item, index) {
        if (item.isChecked == true) {
          count++;
        }
      });

      return Math.round(count / listData.length * 100)
    }
    return 0
  }

  function handleCheck(e, i) {
    const isChecked = e.target.checked
    listData[i].isChecked = isChecked
    setListData([...listData])
  }

  return (
    <>
      <UserNavBar changeTheme={setTheme}></UserNavBar>
      <Container>
        <div className="mt-4 pt-3 mb-4">
          <UserProgressBar min={0} max={100} now={checklist()} />
        </div>
        <div className="mb-4">
          <h1 className='h1'>To-Do</h1>
        </div>
        <div className="">
          {listData ? <UserToDoList list={listData} handleCheck={handleCheck}></UserToDoList> : null}

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
