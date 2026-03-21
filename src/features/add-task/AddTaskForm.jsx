import { TasksContext } from "@/entities/todo"
import Button from "@/shared/ui/Button"
import Field from "@/shared/ui/Field"
import { memo, useContext, useEffect, useRef, useState } from "react"

//форма добавления задачи
function AddTaskForm(props) {
  const { styles } = props

  const { addTask } = useContext(TasksContext)
  const newTaskTitleRef = useRef(null)

  //состояние
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [error, setError] = useState(null)

  const clearTitle = newTaskTitle.trim()
  const isTitleEmpty = clearTitle.length === 0

  const onSubmit = (e) => {
    e.preventDefault()

    if (!isTitleEmpty) {
      addTask(clearTitle, () => {
        setNewTaskTitle("")
        newTaskTitleRef?.current.focus()
      })
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

  useEffect(() => {
    newTaskTitleRef?.current.focus()
  }, [])

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Field
        value={newTaskTitle}
        onInput={onInput}
        ref={newTaskTitleRef}
        className={styles.field}
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
