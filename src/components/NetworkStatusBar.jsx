import React from "react"
import classNames from "classnames"

const NetworkStatusBar = ({ online = true }) => {
  const circleClassnames = classNames(
    "w-3",
    "h-3",
    "rounded-full",
    "shadow-lg",
    {
      "bg-red-500": !online,
      "bg-green-500": online,
    }
  )

  return (
    <div className="fixed bottom-0 right-0 flex justify-end items-center text-white gap-2 py-1 px-4 bg-black m-2 rounded-full">
      <div className={circleClassnames}></div>
      <div>{online ? "Online" : "Offline"}</div>
    </div>
  )
}

export default NetworkStatusBar
