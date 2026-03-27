import { useTasksContext } from "@/entities/todo/model"
import { Button } from "@/shared/ui/Button"
import { Field } from "@/shared/ui/Field/Field"
import { useRef, useState } from "react"

export const AddTaskForm = () => {
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const newTaskTitleRef = useRef(null)

  const clearTitle = newTaskTitle.trim()
  const { addTask, setAnimationState } = useTasksContext()

  const onSubmit = (e) => {
    e.preventDefault()

    if (clearTitle.length === 0) {
      alert("поле заголовка не должно быть пустым или состоять из пробелов")
      return
    }

    const newTask = addTask(clearTitle)

    setAnimationState((prev) => {
      const next = new Map(prev)
      next.set(newTask.id, { add: true })
      return next
    })

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
      <Button isDisabled={clearTitle.length === 0}>Add</Button>
    </form>
  )
}
