import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function UserToDoList() {
    const todos = [
        { id: 1, label: "First checkbox", badge: 14 },
        { id: 2, label: "Second checkbox", badge: 7 },
        { id: 3, label: "Third checkbox", badge: 3 }
    ];


    return (
        <ul className="list-group">
            {todos.map(todo => (
                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center gap-3">
                    <input className="form-check-input me-1" type="checkbox" value="" id={`checkbox${todo.id}`} checked={todo.id == 1 ? true : false} />
                    <label className="form-check-label w-100" htmlFor={`checkbox${todo.id}`}>
                        <span>{todo.label}</span>
                    </label>
                    <span className="badge text-bg-primary rounded-pill">{todo.badge}</span>
                </li>
            ))}
        </ul>
    );
}

export default UserToDoList;