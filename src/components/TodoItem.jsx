import { useTasksContext } from "../context/TasksContext"
import { Button } from "./Button"

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
        setAnimationState((prev) => {
          const next = new Map(prev)
          next.delete(task.id)
          return next
        })

        if (e.animationName === "dis") {
          deleteTask(task.id)
        }
      }}
      className={`todo__item todo-item ${animationState?.get(task.id)?.delete ? "is-disappearing" : ""} ${animationState?.get(task.id)?.add ? "is-appearing" : ""}`}
      ref={firstIncompleteTaskId === task.id ? firstIncompleteTaskRef : null}
    >
      <input
        className="todo-item__checkbox"
        id={task.id}
        type="checkbox"
        checked={task.isCompleted}
        onChange={(e) => changeCompleteStatus(task.id, e.target.checked)}
      />
      <label className="todo-item__label" htmlFor={task.id}>
        {task.title}
      </label>

      <Button
        className="todo-item__delete-button"
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
