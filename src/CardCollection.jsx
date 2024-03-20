import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import TodoHeader from './TodoHeader'
import TodoLists from './TodoLists'

const CardCollection = ({ todoList, newTodoList, addLists, filter, statusFilter, statusCheck, removeCard, editCard }) => {
    return (
        <>
            <TodoHeader
                todoList={todoList}
                addLists={addLists}
                filter={filter}
            />
            <TodoLists
                newTodoList={newTodoList}
                statusFilter={statusFilter}
                statusCheck={statusCheck}
                removeCard={removeCard}
                editCard={editCard}
            />
        </>
    )
}

export default CardCollection