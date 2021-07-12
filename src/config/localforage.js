import localforage from "localforage"

localforage.config({
  driver: localforage.INDEXEDDB,
  name: "TodoOfflineApp",
  version: 1.0,
  storeName: "todos_store",
})

const syncToStorage = async (todos) => {
  try {
    await localforage.setItem("todos", todos)
  } catch (err) {
    console.log(err)
  }
}

const syncToState = async (setTodos) => {
  try {
    const localTodos = await localforage.getItem("todos")
    setTodos(localTodos || [])
  } catch (err) {
    console.log(err)
  }
}

export { syncToStorage, syncToState }
