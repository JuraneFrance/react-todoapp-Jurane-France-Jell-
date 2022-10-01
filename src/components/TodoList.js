import React from 'react'
import Todo from './Todo'
const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <Todo
          key={t.id}
          todo={t}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  )
}

export default TodoList
