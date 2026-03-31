import { useFilteredTasks, useTasksContext } from "../../model"
import { TodoItem } from "../TodoItem"

interface TodoList {
  styles: Record<string, string>
}

export const TodoList = (props: TodoList) => {
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
