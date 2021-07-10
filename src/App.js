import React, { useEffect, useState } from "react"
import "./App.css"
import NetworkStatusBar from "./components/NetworkStatusBar"
import TodoList from "./components/TodoList"
import TodoHeader from "./components/TodoHeader"

function App() {
  const [online, setOnline] = useState(true)

  useEffect(() => {
    setOnline(window.navigator.onLine)

    window.addEventListener("offline", () => {
      console.log("Offline")
      setOnline(false)
    })

    window.addEventListener("online", () => {
      console.log("Online")
      setOnline(true)
    })

    return () => {
      window.removeEventListener("offline")
      window.removeEventListener("online")
    }
  }, [])

  return (
    <div className="flex justify-center p-12 min-h-screen h-auto bg-primary-500">
      <NetworkStatusBar online={online} />
      <div className="w-3/5 rounded-md bg-white p-10">
        <TodoHeader />
        <TodoList />
      </div>
    </div>
  )
}

export default App
