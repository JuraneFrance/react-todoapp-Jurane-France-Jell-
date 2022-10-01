import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = { text, description, date }
    addTodo(newTodo)
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={date}
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit"> Add</button>
    </form>
  )
}

export default TodoForm
