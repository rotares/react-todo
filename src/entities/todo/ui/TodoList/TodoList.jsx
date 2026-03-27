import { useFilteredTasks, useTasksContext } from "../../model"
import { TodoItem } from "../TodoItem"

export const TodoList = () => {
  const { tasks } = useTasksContext()
  const filteredTasks = useFilteredTasks()

  const hasTasks = tasks.length > 0

  if (!hasTasks) {
    return <div className="todo__empty-message">You have no tasks yet</div>
  }

  if (hasTasks && filteredTasks?.length === 0) {
    return <div className="todo__empty-message">Cannot Find Tasks</div>
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => {
        return <TodoItem key={task.id} task={task} />
      })}
    </ul>
  )
}
