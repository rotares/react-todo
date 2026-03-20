import { TasksContext } from "@/entities/todo"
import { memo, useContext, useMemo } from "react"

function TodoInfo(props) {
  const { styles } = props

  const { tasks, deleteAllTasks } = useContext(TasksContext)

  const total = tasks.length
  const hasTasks = total > 0

  const done = useMemo(() => {
    return tasks.filter(({ isDone }) => isDone).length
  }, [tasks])

  return (
    <div className={styles.info}>
      <div>
        Done {done} / {total}
      </div>
      {hasTasks && (
        <button
          onClick={deleteAllTasks}
          className={styles.deleteAllButton}
          type="button"
        >
          Delete all
        </button>
      )}
    </div>
  )
}

export default memo(TodoInfo)
