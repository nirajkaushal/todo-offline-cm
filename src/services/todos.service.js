const API_BASE_URL = "https://jsonplaceholder.typicode.com"

class TodosService {
  static getTodos = async () => {
    const response = await fetch(`${API_BASE_URL}/todos`)

    if (!response.ok) return []

    return await response.json()
  }

  static addTodo = async ({ title }) => {
    const response = await fetch(`${API_BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed: false }),
    })

    if (!response.ok) return

    return await response.json()
  }

  static toggleTodo = async ({ id, checked }) => {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: checked }),
    })

    if (!response.ok) return

    return await response.json()
  }

  static deleteTodo = async ({ id }) => {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) return

    return await response.json()
  }
}

export default TodosService
