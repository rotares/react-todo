import { useSearchContext } from "@/entities/todo/model"
import type { stylesProps } from "@/shared/types"
import { Field } from "@/shared/ui/Field"

export const SearchTaskForm = (props: stylesProps) => {
  const { styles } = props
  const { searchQuery, setSearchQuery } = useSearchContext()

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
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
