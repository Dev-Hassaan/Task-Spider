import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserNavBar({ changeTheme }) {
  return (
    <Navbar className="py-3 justify-content-between border-bottom border-1 border-blue">
      <div className="ms-5">
        <i className="fs-2 bi bi-person-circle"></i>
      </div>
      <div onClick={() => {
        changeTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
      }} className="me-5">
        <i className="fs-2 bi bi-brightness-high-fill"></i>
      </div>
    </Navbar>
  );
}

export default UserNavBar;