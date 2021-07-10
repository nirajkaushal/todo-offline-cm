import React from "react"
import "./App.css"
import NetworkStatusBar from "./components/NetworkStatusBar"
import TodoList from "./components/TodoList"
import TodoHeader from "./components/TodoHeader"
import TodoInput from "./components/TodoInput"

function App() {
  return (
    <div className="flex justify-center p-12 h-auto bg-primary-500">
      <NetworkStatusBar />
      <div className="w-3/5 rounded-md bg-white p-10">
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}

export default App
