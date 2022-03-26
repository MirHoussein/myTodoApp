import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
    const [alertWarning, setAlertWarning] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }


    const submitTodoHandler = (e) => {
        e.preventDefault();
        const isEmpty = str => !str.trim().length;
        if (isEmpty(inputText)) {
            setAlertWarning(true);
            setTimeout(() => {
                setAlertWarning(false);
            }, 1000);
        } else {
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false);
            }, 1000);
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() }
            ]);
        }

        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <div className="search">
                <input value={inputText} type="text" className="todo-input" placeholder="Tapşırığı daxil edin" onChange={inputTextHandler} />
                <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
          
            <div className="alert-wrapper">
                
                {alertWarning ? <div className="alert-warning">
                </div> : ""}

                {alertSuccess ? <div className="alert-success">
                </div> : ""}
            </div>
        </form>
    )
}

export default Form