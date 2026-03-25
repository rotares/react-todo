import { useTasksContext } from "../context/TasksContext"
import { Button } from "./Button"

export const TodoInfo = () => {
  const { tasks } = useTasksContext()
  const totalTasks = tasks.length

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">Total tasks: {totalTasks}</div>
      {tasks.length > 0 && (
        <Button type="button" className="todo__delete-all-button">
          Delete all
        </Button>
      )}
    </div>
  )
}
