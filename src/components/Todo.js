import React from 'react'

const Todo = ({ todo, handleDelete, handleEdit }) => {
  return (
    <div className="allTodos">
      <p className="todoText">{todo.text}</p>
      {/* <p>
            todo.description
          </p> */}
      <button onClick={() => handleEdit(todo.id)}>Edit</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo
