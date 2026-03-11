import Button from "./Button"
import Field from "./Field"
import { memo, useContext } from "react"
import { TasksContext } from "../context/TasksContext"

//форма добавления задачи
function AddTaskForm() {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskTitleRef } =
    useContext(TasksContext)

  console.log("addtask")
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addTask()
      }}
      className="todo__form"
    >
      <Field
        value={newTaskTitle}
        onInput={(e) => setNewTaskTitle(e.target.value)}
        ref={newTaskTitleRef}
        className="todo__field"
        id="new-task"
        label="New task title"
      />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default memo(AddTaskForm)
