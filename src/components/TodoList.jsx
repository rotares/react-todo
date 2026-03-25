import { useTasksContext } from "@/context/TasksContext"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
  const { tasks } = useTasksContext()

  return (
    <ul className="todo__list">
      {tasks.map((task) => {
        return <TodoItem key={task.id} task={task} />
      })}
    </ul>
  )
}
