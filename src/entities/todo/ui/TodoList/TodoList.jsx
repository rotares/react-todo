import { TasksContext, TodoItem } from "@/entities/todo"
import { memo, useContext } from "react"

function TodoList(props) {
  const { styles } = props

  const { tasks, filteredTasks } = useContext(TasksContext)

  const hasTasks = tasks.length > 0

  //если нету тасок, то выводим, сообщ
  if (!hasTasks) {
    return <div className={styles.emptyMessage}>There are no tasks yet</div>
  }

  //если таски есть, но по поиску вернуло - результатов

  if (hasTasks && filteredTasks?.length === 0) {
    return <div className={styles.emptyMessage}>Not Found</div>
  }

  return (
    <ul className={styles.list}>
      {/*преобразуем каждую задачу в разметку */}
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem className={styles.item} key={task.id} {...task} />
      ))}
    </ul>
  )
}

export default memo(TodoList)
