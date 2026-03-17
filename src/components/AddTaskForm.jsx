import Button from "./Button"
import Field from "./Field"
import { memo, useContext, useState } from "react"
import { TasksContext } from "../context/TasksContext"

//форма добавления задачи
function AddTaskForm() {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskTitleRef } =
    useContext(TasksContext)

  //состояние
  const [error, setError] = useState(null)

  const clearTitle = newTaskTitle.trim()
  const isTitleEmpty = clearTitle.length === 0

  const onSubmit = (e) => {
    e.preventDefault()

    if (!isTitleEmpty) {
      addTask(clearTitle)
    }
  }

  //новый метод onInput с валидацией только пробелов
  const onInput = (e) => {
    const { value } = e.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0

    setNewTaskTitle(value)
    setError(hasOnlySpaces ? "Error, only spaces" : null)
  }

  return (
    <form onSubmit={onSubmit} className="todo__form">
      <Field
        value={newTaskTitle}
        onInput={onInput}
        ref={newTaskTitleRef}
        className="todo__field"
        id="new-task"
        label="New task title"
        error={error}
      />
      <Button isDisabled={isTitleEmpty} type="submit">
        Add
      </Button>
    </form>
  )
}

export default memo(AddTaskForm)
