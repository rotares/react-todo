import { stylesProps } from "@/shared/types"
import { useFilteredTasks, useTasksContext } from "../../model"
import { TodoItem } from "../TodoItem"

export const TodoList = (props: stylesProps) => {
  const { styles } = props

  const { tasks } = useTasksContext()
  const filteredTasks = useFilteredTasks()

  const hasTasks = tasks.length > 0

  if (!hasTasks) {
    return <div className={styles.emptyMessage}>You have no tasks yet</div>
  }

  if (hasTasks && filteredTasks?.length === 0) {
    return <div className={styles.emptyMessage}>Cannot Find Tasks</div>
  }

  return (
    <ul className={styles.list}>
      {(filteredTasks ?? tasks).map((task) => {
        return <TodoItem key={task.id} task={task} />
      })}
    </ul>
  )
}
