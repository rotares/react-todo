import { useTasksContext } from "@/entities/todo/model"
import type { stylesProps } from "@/shared/types"
import { Button } from "@/shared/ui/Button"

export const TodoInfo = (props: stylesProps) => {
  const { styles } = props

  const { tasks, deleteAllTasks } = useTasksContext()
  const totalTasks = tasks.length

  return (
    <div className={styles.info}>
      <div>Total tasks: {totalTasks}</div>
      {tasks.length > 0 && (
        <Button
          onClick={deleteAllTasks}
          type="button"
          className={styles.deleteAllButton}
        >
          Delete all
        </Button>
      )}
    </div>
  )
}
