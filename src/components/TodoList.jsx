import { useState } from "react"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
  const [tasks, setTasks] = useState(() => [
    { id: Date.now().toString(), title: "123", isCompleted: true },
    { id: Date.now().toString(), title: "321", isCompleted: false },
  ])

  if (tasks.length === 0) {
    return <div className="todo__empty-message">You haven't tasks yet</div>
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => {
        return <TodoItem key={task.id} task={task} />
      })}
    </ul>
  )
}
