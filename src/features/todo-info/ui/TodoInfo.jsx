import { useTasksContext } from "@/entities/todo/model"
import { Button } from "@/shared/ui/Button"

export const TodoInfo = () => {
  const { tasks, deleteAllTasks } = useTasksContext()
  const totalTasks = tasks.length

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">Total tasks: {totalTasks}</div>
      {tasks.length > 0 && (
        <Button
          onClick={deleteAllTasks}
          type="button"
          className="todo__delete-all-button"
        >
          Delete all
        </Button>
      )}
    </div>
  )
}
