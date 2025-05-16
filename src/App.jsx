import { Container } from 'react-bootstrap'
import './App.css'
import UserNavBar from './components/UserNavBar'
import UserProgressBar from './components/UserProgressBar'
import UserToDoList from './components/UserToDoList'
import FloatingPlus from './components/FloatingPlus'

function App() {

  return (
    <>
      <UserNavBar></UserNavBar>
      <Container>
        <div className="mt-4 pt-3 mb-4">
            <UserProgressBar></UserProgressBar>
        </div>
        <div className="mb-5">
          <h1 className='h1'>To-Do</h1>
        </div>
        <div className="">
          <UserToDoList></UserToDoList>
        </div>
      </Container>
      <FloatingPlus></FloatingPlus>
    </>
  )
}

export default App
