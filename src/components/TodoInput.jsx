import React, { useState } from "react"

const TodoInput = ({ onAddTask }) => {
  const [value, setValue] = useState("")

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleAddTaskButtonClick = () => {
    if (!value) return

    setValue("")
    onAddTask(value)
  }

  return (
    <div className="flex justify-between items-center gap-4 mb-6">
      <input
        className="flex-1 form-input px-4 py-3 rounded-md border-2 focus:border-primary-500 focus:outline-none focus-visible:ring-0"
        value={value}
        onChange={handleInputChange}
      />
      <button
        className="px-4 py-3 bg-primary-500 text-white border-2 border-primary-400 rounded-md"
        onClick={handleAddTaskButtonClick}
      >
        Add Task
      </button>
    </div>
  )
}

export default TodoInput
