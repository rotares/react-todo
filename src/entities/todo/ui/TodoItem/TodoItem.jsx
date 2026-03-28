import { Button } from "@/shared/ui/Button"
import RouterLink from "@/shared/ui/RouterLink"
import { useTasksContext } from "../../model"
import styles from "./TodoItem.module.css"

export const TodoItem = (props) => {
  const { task } = props
  const {
    changeCompleteStatus,
    deleteTask,
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
    animationState,
    setAnimationState,
  } = useTasksContext()

  const handleDelete = () => {
    setAnimationState((prev) => {
      const next = new Map(prev)
      next.set(task.id, { delete: true })
      return next
    })
  }

  return (
    <li
      onAnimationEnd={(e) => {
        console.log(e)
        if (e.animationName === styles.dis) {
          deleteTask(task.id)
        }
      }}
      className={`${styles.todoItem} ${animationState?.get(task.id)?.delete ? styles.isDisappearing : ""} ${animationState?.get(task.id)?.add ? styles.isAppearing : ""}`}
      ref={firstIncompleteTaskId === task.id ? firstIncompleteTaskRef : null}
    >
      <input
        className={styles.checkbox}
        id={task.id}
        type="checkbox"
        checked={task.isCompleted}
        onChange={(e) => changeCompleteStatus(task.id, e.target.checked)}
      />

      <label className="visually-hidden" htmlFor={task.id}>
        {task.title}
      </label>

      <RouterLink to={`/tasks/${task.id}`} className={styles.link}>
        {task.title}
      </RouterLink>

      <Button
        className={styles.deleteButton}
        aria-label="Delete"
        title="Delete"
        onClick={handleDelete}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </li>
  )
}
