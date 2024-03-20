import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./InputBox.css"

const InputBox = ({ setTodoName, setTodoDesc, handleSubmit, todoName, todoDesc, updateId }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <form className='todo-form'>
            <input type="text"
              className='form-control'
              placeholder='Todo Name'
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
            />
            <input type="text"
              className='form-control'
              placeholder='Todo Description'
              value={todoDesc}
              onChange={(e) => setTodoDesc(e.target.value)}
            />
            <button type='submit'
              className='btn submit-btn'
              onClick={(event) => handleSubmit(event)}
            >
              {updateId == '' ? "Add Todo" : "Update Todo"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InputBox