import React from "react"

const TodoInput = () => {
  return (
    <div className="flex justify-between items-center gap-4 mt-6">
      <input class="flex-1 form-input px-4 py-3 rounded-md border-2 focus:border-primary-500 focus:outline-none focus-visible:ring-0"></input>
      <button className="px-4 py-3 bg-primary-500 text-white border-2 border-primary-400 rounded-md">
        Add Task
      </button>
    </div>
  )
}

export default TodoInput
