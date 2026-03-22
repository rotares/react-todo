import { useMemo } from 'react'
import { useSearchTask } from './SearchTaskContext'
import useTasks from './useTasks'

export const useFilteredTasks = () => {
  const { tasks } = useTasks()
  const { searchQuery } = useSearchTask()

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().length > 0

    return clearSearchQuery
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : null
  }, [tasks, searchQuery])

  return filteredTasks
}
