import { useSearchContext } from "@/entities/todo/model"
import { Field } from "@/shared/ui/Field"

export const SearchTaskForm = (props) => {
  const { styles } = props

  const { searchQuery, setSearchQuery } = useSearchContext()

  const onInput = ({ target }) => {
    setSearchQuery(target.value)
  }

  return (
    <form className={styles.form}>
      <Field
        className={styles.field}
        id="search-task2"
        label="Search Task"
        type="search"
        value={searchQuery}
        onInput={onInput}
      />
    </form>
  )
}
