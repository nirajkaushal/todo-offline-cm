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
    <div className="flex justify-between items-center gap-2 md:gap-4 mb-6">
      <input
        className="text-sm md:text-md flex-1 form-input px-2 py-2 md:px-4 md:py-3 rounded-sm md:rounded-md border-2 focus:border-primary-500 focus:outline-none focus-visible:ring-0"
        value={value}
        onChange={handleInputChange}
      />
      <button
        className="text-sm md:text-md w-20 md:w-auto px-2 py-2 md:px-4 md:py-3 bg-primary-400 text-white border-2 border-primary-400 rounded-sm md:rounded-md hover:border-primary-500 hover:bg-primary-500"
        onClick={handleAddTaskButtonClick}
      >
        Add Task
      </button>
    </div>
  )
}

export default TodoInput
