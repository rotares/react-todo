import Field from "./Field"
function SearchTaskForm() {
  return (
    <div className="todo__form">
      <Field
        className="todo__field"
        id="search-task"
        label="Search task"
        type="search"
      />
    </div>
  )
}

export default SearchTaskForm
