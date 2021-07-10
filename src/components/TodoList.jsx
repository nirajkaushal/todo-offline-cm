import React from "react"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const todos = [
    { id: Date.now(), title: "Task 1", completed: false },
    { id: Date.now(), title: "Task 2", completed: true },
    { id: Date.now(), title: "Task 3", completed: false },
    { id: Date.now(), title: "Task 4", completed: true },
    { id: Date.now(), title: "Task 5", completed: false },
    { id: Date.now(), title: "Task 6", completed: true },
    { id: Date.now(), title: "Task 7", completed: false },
    { id: Date.now(), title: "Task 8", completed: true },
    { id: Date.now(), title: "Task 9", completed: false },
    { id: Date.now(), title: "Task 10", completed: true },
    { id: Date.now(), title: "Task 11", completed: false },
    { id: Date.now(), title: "Task 12", completed: true },
  ]

  return (
    <div className="mt-6">
      {todos.map(({ id, title, completed }) => (
        <TodoItem key={id} title={title} completed={completed} />
      ))}
    </div>
  )
}

export default TodoList
