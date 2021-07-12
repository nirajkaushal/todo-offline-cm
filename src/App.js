import React from "react"
import "./App.css"
import NetworkStatusBar from "./components/NetworkStatusBar"
import TodoList from "./components/TodoList"
import TodoHeader from "./components/TodoHeader"

function App() {
  return (
    <div className="flex justify-center p-0 md:p-12 min-h-screen h-auto bg-primary-500">
      <NetworkStatusBar />
      <div className="w-full lg:w-3/5 rounded-sm md:rounded-md bg-white p-2 md:p-10 max-w-2xl box-content">
        <TodoHeader />
        <TodoList />
      </div>
    </div>
  )
}

export default App
