import React, { useState, useEffect } from "react"
import classNames from "classnames"

const NetworkStatusBar = () => {
  const [online, setOnline] = useState(true)

  useEffect(() => {
    setOnline(window.navigator.onLine)

    window.addEventListener("offline", () => {
      setOnline(false)
    })

    window.addEventListener("online", () => {
      setOnline(true)
    })

    return () => {
      window.removeEventListener("offline")
      window.removeEventListener("online")
    }
  }, [])

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
      <div>{online ? "Connected" : "Disconnected"}</div>
    </div>
  )
}

export default NetworkStatusBar
