import React, { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    const id = todos.length > 1 ? todos.length + 1 : 1
    const newTodo = { id, ...todo }
    console.log(newTodo)
    if (todos) setTodos([newTodo])
    else setTodos([todos, ...newTodo])
  }

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id)
    setTodos([...delTodo])
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((to) => to.id === id)
    setTodos([...todos, editTodo])
    // setEditId(id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default App
