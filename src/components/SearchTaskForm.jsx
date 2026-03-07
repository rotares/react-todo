import Field from "./Field"
function SearchTaskForm(props) {
  const { searchQuery, setSearchQuery } = props

  //передаем колббек который будет возвращать уже значение из инпута
  return (
    <form onSubmit={(e) => e.preventDefault()} className="todo__form">
      <Field
        className="todo__field"
        id="search-task"
        label="Search task"
        type="search"
        onInput={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
      />
    </form>
  )
}

export default SearchTaskForm
