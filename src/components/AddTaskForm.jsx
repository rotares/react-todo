import { Button } from "./Button"
import { Field } from "./Field"

export const AddTaskForm = () => {
  return (
    <form className="todo__form">
      <Field label="New Task" id="new-task" />
      <Button>Add</Button>
    </form>
  )
}
