import Field from "./Field"
function SearchTaskForm(props) {
  const { onSearchInput } = props

  //передаем колббек который будет возвращать уже значение из инпута
  return (
    <form onSubmit={(e) => e.preventDefault()} className="todo__form">
      <Field
        className="todo__field"
        id="search-task"
        label="Search task"
        type="search"
        onInput={(event) => onSearchInput(event.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm
