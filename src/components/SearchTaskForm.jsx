import { Field } from "./Field"

export const SearchTaskForm = () => {
  return (
    <form className="todo__form">
      <Field
        id="search-task2"
        label="Search Task"
        type="search"
        onInput={(e) => console.log(e.target.value)}
      />
    </form>
  )
}
