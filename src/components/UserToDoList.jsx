import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function UserToDoList({list, handleCheck}) {
    return (
        <ul className="list-group">
            {list.map((item, index) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center gap-3 py-lg-3 py-2">
                    <input className="form-check-input me-1 fs-5 fs-sm-5" type="checkbox" value="" id={`checkbox${item.id}`} onChange={(e) => {handleCheck(e, index)}} defaultChecked={item.isChecked} />
                    <label className="form-check-label w-100" htmlFor={ true ? `checkbox${item.id}` : ""}>
                        <div className='fs-5 fs-sm-5 fw-medium'>{item.title}</div>
                        <div className='fs-6 fs-sm-6 fw-light'>{item.description}</div>
                    </label>
                    <span className="badge text-bg-primary rounded-pill">{item.badge}</span>
                </li>
            ))}
        </ul>
    );
}

export default UserToDoList;