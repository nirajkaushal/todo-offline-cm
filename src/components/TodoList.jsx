import React, { useEffect, useState } from "react"
import TodoItem from "./TodoItem"
import TodoInput from "./TodoInput"
import { syncToStorage, syncToState } from "../config/localforage"
import TodosService from "../services/todos.service"

const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    syncToStorage(todos)
  }, [todos])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await TodosService.getTodos()

        setTodos(todos.reverse())
      } catch (err) {
        syncToState(setTodos)
      }
    }

    fetchTodos()
  }, [])

  const handleToggole = async ({ id, checked }) => {
    // Optimistic update
    const clonedTodos = JSON.parse(JSON.stringify(todos))

    const tempTodos = clonedTodos.map((t) =>
      t.id === id ? { ...t, completed: checked } : t
    )
    setTodos(tempTodos)

    const todo = await TodosService.toggleTodo({ id, checked })

    if (todo) return

    setTodos(clonedTodos)
  }

  const handleDelete = async (id) => {
    // Optiomistic update
    const clonedTodos = JSON.parse(JSON.stringify(todos))

    const tempTodos = clonedTodos.filter((t) => t.id !== id)

    setTodos(tempTodos)

    const todo = await TodosService.deleteTodo({ id })

    if (todo) return

    setTodos(clonedTodos)
  }

  const handleAddTask = async (title) => {
    // Optimistic update
    const clonedTodos = JSON.parse(JSON.stringify(todos))

    const tempId = todos.length + 1
    const tempTodos = [{ id: tempId, title, completed: false }, ...clonedTodos]

    setTodos(tempTodos)

    const todo = await TodosService.addTodo({ title })

    if (todo) {
      setTodos(tempTodos.map((t) => (t.id === tempId ? todo : t)))
      return
    }

    setTodos(clonedTodos)
  }

  return (
    <div className="mt-6">
      <TodoInput onAddTask={handleAddTask} />

      {todos.map(({ id, title, completed }, index) => (
        <TodoItem
          key={index}
          id={id}
          title={title}
          completed={completed}
          onToggle={handleToggole}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
