import React from 'react'
import { useState } from 'react'
import Header from './Header'
import InputBox from './InputBox'
import CardCollection from './CardCollection'

function App() {

  // State for Todo Name
  const [todoName, setTodoName] = useState('')

  // State for Todo Description
  const [todoDesc, setTodoDesc] = useState('')

  // State for TodoLists
  const [todoList, setTodoList] = useState([])

  // State for Todo Status Filter
  const [filter, setFilter] = useState("All")

  // State for New TodoLists
  const [newTodoList, setNewTodoList] = useState([])

  // State for Todo Status Change
  const [statusFilter, setStatusFilter] = useState("Not Completed")

  // State for Update Id in Every card
  const [updateId, setUpdateId] = useState('')

  // Adding data to the todoList for every new card
  let addList = (tName, tDesc, event) => {

    // Checking condition if update id is empty or not
    if (updateId) {

      // Update card details
      event.preventDefault();
      const updateItem = todoList.map((item) => {
        return item.id == updateId ? { ...item, name: tName, description: tDesc } : item
      })
      setNewTodoList(updateItem)
      setTodoList(updateItem)
      setTodoName('')
      setTodoDesc('')
      setUpdateId('')

    } else {

      // Create new Card details
      event.preventDefault();
      const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1
      const addNewItem = { id: id, name: tName, description: tDesc, status: "Not Completed" }
      const listItems = [...todoList, addNewItem]
      setTodoList(listItems)
      setNewTodoList(listItems)
      setTodoName('')
      setTodoDesc('')
    }
  }

  // Filter Todo Status
  let addLists = (sort) => {
    if (sort == "All") {
      setNewTodoList(todoList)
      setFilter(sort)
    } else {
      let newarr = todoList.filter((item) => item.status == sort)
      setNewTodoList(newarr)
      setFilter(sort)
    }
  }

  // Change Todo Status
  let statusCheck = (status, id) => {
    let statusChange = newTodoList.map((item) => {
      return item.id == id ? { ...item, status: status } : item
    })
    setNewTodoList(statusChange)
    setStatusFilter(status)
    setTodoList(statusChange)
  }

  // Remove Todo Card from the list
  let removeCard = (id) => {
    let remove = newTodoList.filter((item) => {
      return item.id != id && item
    })
    setNewTodoList(remove)
    setTodoList(remove)
  }

  // Edit Todo Card from the list
  let editCard = (ids) => {
    let editInfo = newTodoList.filter((item) => {
      return item.id == ids && item
    })
    setTodoName(editInfo[0].name)
    setTodoDesc(editInfo[0].description)
    setUpdateId(ids)
  }

  // Getting data from input box
  let handleSubmit = (event) => {
    if (todoName && todoDesc) {
      addList(todoName, todoDesc, event)
    }
  }

  return (
    <>
      <Header />
      <InputBox
        todoName={todoName}
        todoDesc={todoDesc}
        setTodoName={setTodoName}
        setTodoDesc={setTodoDesc}
        handleSubmit={handleSubmit}
        updateId={updateId}
      />
      <CardCollection
        todoList={todoList}
        newTodoList={newTodoList}
        addLists={addLists}
        filter={filter}
        statusFilter={statusFilter}
        statusCheck={statusCheck}
        removeCard={removeCard}
        editCard={editCard}
      />
    </>
  )
}

export default App
