import { memo, useContext } from "react"
import Field from "./Field"
import { TasksContext } from "../context/TasksContext"

function SearchTaskForm() {
  const { searchQuery, setSearchQuery } = useContext(TasksContext)

  console.log(123)
  //передаем колббек который будет возвращать уже значение из инпута
  return (
    <form onSubmit={(e) => e.preventDefault()} className="todo__form">
      <Field
        className="todo__field"
        id="search-task"
        label="Search task"
        type="search"
        onInput={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
      />
    </form>
  )
}

export default memo(SearchTaskForm)
