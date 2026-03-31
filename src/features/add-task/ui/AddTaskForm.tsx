import { useTasksContext } from "@/entities/todo/model"
import type { stylesProps } from "@/shared/types"
import { Button } from "@/shared/ui/Button"
import { Field } from "@/shared/ui/Field"
import { useRef, useState } from "react"

export const AddTaskForm = (props: stylesProps) => {
  const { styles } = props

  const [newTaskTitle, setNewTaskTitle] = useState<string>("")
  const newTaskTitleRef = useRef<HTMLInputElement>(null)

  const clearTitle = newTaskTitle.trim()
  const { addTask, setAnimationState } = useTasksContext()

  //типизация submit
  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
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

  const onInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTaskTitle(e.currentTarget.value)
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Field
        ref={newTaskTitleRef}
        onInput={onInput}
        value={newTaskTitle}
        className={styles.field}
        label="New Task"
        id="new-task"
      />
      <Button disabled={clearTitle.length === 0}>Add</Button>
    </form>
  )
}
