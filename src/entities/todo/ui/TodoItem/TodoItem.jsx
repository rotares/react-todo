import { TasksContext } from "@/entities/todo"
import RouterLink from "@/shared/ui/RouterLink"
import { highlightCaseInsensitive } from "@/shared/utils/highlight"
import { memo, useContext } from "react"
import { useSearchTask } from "../../model/SearchTaskContext"
import styles from "./TodoItem.module.css"

//компонент одной задачи
function TodoItem(props) {
  const { id, title, isDone = false } = props

  const {
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
    toggleTaskComplete,
    deleteTask,
    currentDeleteTaskId,
    currentAppearingTaskId,
  } = useContext(TasksContext)

  const { searchQuery } = useSearchTask()
  const highlightedTitle = highlightCaseInsensitive(title, searchQuery)

  return (
    <li
      className={`${styles.item} 
      ${id === currentAppearingTaskId ? styles.isAppearing : ""} 
      ${id === currentDeleteTaskId ? styles.isDisappearing : ""}`}
      ref={id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
    >
      <input
        className={styles.checkbox}
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={({ target }) => {
          toggleTaskComplete(id, target.checked)
        }}
        readOnly
      />

      <label className={`${styles.label} visually-hidden`} htmlFor={id}>
        {title}
      </label>

      <RouterLink to={`tasks/${id}`} aria-label="page with details of task">
        {/* {title} */}
        <span dangerouslySetInnerHTML={{ __html: highlightedTitle }}></span>
      </RouterLink>

      <button
        className={styles.deleteButton}
        aria-label="Delete"
        title="Delete"
        onClick={() => deleteTask(id)}
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
      </button>
    </li>
  )
}

export default memo(TodoItem)
