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
    "gap-4",
    "rounded-md",
    {
      "bg-gray-50": !completed,
      "bg-green-100": completed,
    }
  )

const TodoItem = ({ id, title, completed, onToggle, onDelete }) => {
  const handleCheckboxChange = (e) => {
    onToggle({ id, checked: e.target.checked })
  }

  const handleDeleteButtonClick = () => {
    onDelete(id)
  }

  return (
    <div className={itemClassNames({ completed })}>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-primary-500 cursor-pointer focus:border-primary-300 focus:outline-none focus-visible:ring-0"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <span className="ml-2 text-gray-700 cursor-pointer">{title}</span>
      </label>
      <button
        className="w-8 h-8 p-2 text-gray-300  rounded-full  cursor-pointer hover:bg-red-500 hover:text-white"
        onClick={handleDeleteButtonClick}
      >
        <DeleteIcon />
      </button>
    </div>
  )
}

export default TodoItem
