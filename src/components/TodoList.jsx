import { useTasksContext } from "@/context/TasksContext"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
  const { tasks } = useTasksContext()

  if (tasks.length === 0) {
    return <div className="todo__empty-message">You have no tasks yet</div>
  }
  return (
    <ul className="todo__list">
      {tasks.map((task) => {
        return <TodoItem key={task.id} task={task} />
      })}
    </ul>
  )
}
