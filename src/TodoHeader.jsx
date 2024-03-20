import React from 'react'
import "./TodoHeader.css"

const TodoHeader = ({todoList,addLists,filter}) => {
    return (
        <>
        {
            todoList.length ? (
                <div className="todo-header">
                <h5 className='todo-title'>My Todos</h5>
                <div className="btn-group todo-sort">
                    <h5>Status Filter : </h5>
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {filter}
                    </button>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={()=>addLists("All")}>All</a></li>
                        <li><a className="dropdown-item" href="#" onClick={()=>addLists("Completed")}>Completed</a></li>
                        <li><a className="dropdown-item" href="#" onClick={()=>addLists("Not Completed")}>Not Completed</a></li>
                    </ul>
                </div>
            </div>
            ) : (
                <p className='text-center'>Your Todo List is Empty</p>
            )
        }
            
        </>
    )
}

export default TodoHeader