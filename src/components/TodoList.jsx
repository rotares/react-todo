import { useTasksContext } from "@/context/TasksContext"
import { useFilteredTasks } from "../hooks/useFilteredTasks"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
  const { tasks } = useTasksContext()
  const filteredTasks = useFilteredTasks()

  if (tasks.length === 0) {
    return <div className="todo__empty-message">You have no tasks yet</div>
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => {
        return <TodoItem key={task.id} task={task} />
      })}
    </ul>
  )
}
