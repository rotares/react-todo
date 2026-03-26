import { useSearchContext } from "../context/SearchTasksContext"
import { Field } from "./Field"

export const SearchTaskForm = () => {
  const { searchQuery, setSearchQuery } = useSearchContext()

  const onInput = ({ target }) => {
    setSearchQuery(target.value)
  }

  return (
    <form className="todo__form">
      <Field
        id="search-task2"
        label="Search Task"
        type="search"
        value={searchQuery}
        onInput={onInput}
      />
    </form>
  )
}
