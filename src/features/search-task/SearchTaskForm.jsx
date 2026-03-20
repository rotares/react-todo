import { TasksContext } from "@/entities/todo"
import Field from "@/shared/ui/Field"
import { memo, useContext } from "react"

function SearchTaskForm(props) {
  const { styles } = props
  const { searchQuery, setSearchQuery } = useContext(TasksContext)

  //передаем колббек который будет возвращать уже значение из инпута
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <Field
        className={styles.field}
        id="search-task"
        label="Search task"
        type="search"
        onInput={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
      />
    </form>
  )
}

export default memo(SearchTaskForm)
