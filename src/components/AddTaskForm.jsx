import Button from "./Button"
import Field from "./Field"
import { memo, useContext } from "react"
import { TasksContext } from "../context/TasksContext"

//форма добавления задачи
function AddTaskForm() {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskTitleRef } =
    useContext(TasksContext)

  const clearTitle = newTaskTitle.trim()
  const isTitleEmpty = clearTitle.length === 0

  const onSubmit = (e) => {
    e.preventDefault()

    if (!isTitleEmpty) {
      addTask(clearTitle)
    }
  }

  return (
    <form onSubmit={onSubmit} className="todo__form">
      <Field
        value={newTaskTitle}
        onInput={(e) => setNewTaskTitle(e.target.value)}
        ref={newTaskTitleRef}
        className="todo__field"
        id="new-task"
        label="New task title"
      />
      <Button isDisabled={isTitleEmpty} type="submit">
        Add
      </Button>
    </form>
  )
}

export default memo(AddTaskForm)
