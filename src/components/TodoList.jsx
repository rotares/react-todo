import TodoItem from "./TodoItem"

function TodoList(props) {
  const {
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChangeButton,
  } = props

  const hasTasks = true

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>
  }

  return (
    <ul className="todo__list">
      {/*преобразуем каждую задачу в разметку */}
      {tasks.map((task) => (
        <TodoItem
          className="todo__item"
          key={task.id}
          id={task.id}
          isDone={task.isDone}
          title={task.title}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChangeButton={onTaskCompleteChangeButton}
        />
      ))}
    </ul>
  )
}

export default TodoList
