import { memo } from "react"

function TodoInfo(props) {
  const { total, done, onDeleteAllTasksButtonClick } = props

  const hasTasks = total > 0
  console.log("todoinfo")
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {done} / {total}
      </div>
      {hasTasks && (
        <button
          onClick={onDeleteAllTasksButtonClick}
          className="todo__delete-all-button"
          type="button"
        >
          Delete all
        </button>
      )}
    </div>
  )
}

export default memo(TodoInfo)
