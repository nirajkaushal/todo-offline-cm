import React from "react"
import classNames from "classnames"
import DeleteIcon from "./DeleteIcon"

const itemClassNames = ({ completed }) =>
  classNames(
    "flex",
    "items-center",
    "justify-between",
    "p-4",
    "mb-3",
    "rounded-md",
    {
      "bg-gray-50": !completed,
      "bg-green-100": completed,
    }
  )

const TodoItem = ({ id, title, completed }) => {
  const toggleComplete = () => {}

  const deleteTask = () => {}

  return (
    <div className={itemClassNames({ completed })}>
      <label class="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          class="form-checkbox h-5 w-5 text-primary-500 cursor-pointer focus:border-primary-300 focus:outline-none focus-visible:ring-0"
          checked={completed}
          onChange={toggleComplete}
        />
        <span class="ml-2 text-gray-700 cursor-pointer">{title}</span>
      </label>
      <button
        className="w-8 h-8 p-2 text-gray-200  rounded-full  cursor-pointer hover:bg-red-500 hover:text-white"
        onClick={deleteTask}
      >
        <DeleteIcon />
      </button>
    </div>
  )
}

export default TodoItem
