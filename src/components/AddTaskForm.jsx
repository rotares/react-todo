import { useRef, useState } from "react"
import { useTasksContext } from "../context/TasksContext"
import { Button } from "./Button"
import { Field } from "./Field"

export const AddTaskForm = () => {
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const newTaskTitleRef = useRef(null)

  const { addTask } = useTasksContext()

  const onSubmit = (e) => {
    e.preventDefault()

    if (newTaskTitle.trim().length === 0) return

    addTask(newTaskTitle)
    setNewTaskTitle("")
    newTaskTitleRef.current?.focus()
  }

  const onInput = ({ target }) => {
    setNewTaskTitle(target.value)
  }

  return (
    <form onSubmit={onSubmit} className="todo__form">
      <Field
        ref={newTaskTitleRef}
        onInput={onInput}
        value={newTaskTitle}
        label="New Task"
        id="new-task"
      />
      <Button>Add</Button>
    </form>
  )
}
