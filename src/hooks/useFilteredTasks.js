import { useMemo } from 'react'
import { useSearchContext } from '../context/SearchTasksContext'
import { useTasksContext } from '../context/TasksContext'

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
