import { useMemo } from "react"
import { useSearchContext, useTasksContext } from "../context"

export const useFilteredTasks = () => {
  const { tasks } = useTasksContext()
  const { searchQuery } = useSearchContext()

  const filteredTasks = useMemo(() => {
    const clearQuery = searchQuery.toLowerCase().trim()
    return clearQuery
      ? tasks.filter(({ title }) => title.toLowerCase().includes(clearQuery))
      : null
  }, [searchQuery, tasks])

  return filteredTasks
}
