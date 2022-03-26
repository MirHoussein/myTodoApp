import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function Todo({ text, todos, setTodos, todo }) {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className={`todo ${todo.completed ? "completed" : ""}`}>

            <li  className="todo-item">{text}</li>
            <button className="trash-btn" onClick={deleteHandler}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>

        </div>
    )
}

export default Todo;
