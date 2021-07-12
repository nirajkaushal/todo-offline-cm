import React from "react"
import dayjs from "dayjs"

const localizedFormat = require("dayjs/plugin/localizedFormat")
dayjs.extend(localizedFormat)

const TodoHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-2">
        {dayjs().format("dddd")}
      </h1>
      <span className="text-lg md:text-2xl text-gray-200">
        {dayjs().format("MMMM DD, YYYY")}
      </span>
    </div>
  )
}

export default TodoHeader
