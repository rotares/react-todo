import TodoItem from "./TodoItem"
import { memo, useContext } from "react"
import { TasksContext } from "../context/TasksContext"

function TodoList() {
  console.log("todo-list")
  const { tasks, filteredTasks } = useContext(TasksContext)

  const hasTasks = tasks.length > 0

  //если нету тасок, то выводим, сообщ
  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet</div>
  }

  //если таски есть, но по поиску вернуло - результатов

  if (hasTasks && filteredTasks?.length === 0) {
    return <div className="todo__empty-message">Not Found</div>
  }

  return (
    <ul className="todo__list">
      {/*преобразуем каждую задачу в разметку */}
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem className="todo__item" key={task.id} {...task} />
      ))}
    </ul>
  )
}

export default memo(TodoList)
