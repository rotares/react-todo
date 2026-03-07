import Button from "./Button"
import Field from "./Field"

//форма добавления задачи
function AddTaskForm(props) {
  const { addTask } = props

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addTask()
      }}
      className="todo__form"
    >
      <Field className="todo__field" id="new-task" label="New task title" />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default AddTaskForm
