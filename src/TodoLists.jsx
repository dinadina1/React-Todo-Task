import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import TodoItem from './TodoItem'
import "./TodoLists.css"

const TodoLists = ({ newTodoList, statusFilter, statusCheck, removeCard, editCard }) => {
  return (
    <div className="row me-3" >
      {
        newTodoList.map((card) => {
          return <TodoItem
            key={card.id}
            card={card}
            statusFilter={statusFilter}
            statusCheck={statusCheck}
            removeCard={removeCard}
            editCard={editCard}
          />
        })
      }
    </div>
  )
}

export default TodoLists