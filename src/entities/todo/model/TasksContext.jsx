// импортируем кастомный хук
import { createContext, useMemo } from "react"
import useIncompleteTaskScroll from "./useIncompleteTaskScroll"
import useTasks from "./useTasks"

export const TasksContext = createContext({})

export default function TasksProvider({ children }) {
  //получаем сущности из хука
  const {
    tasks,
    filteredTasks,
    newTaskTitleRef,
    deleteAllTasks,
    deleteTask,
    addTask,
    toggleTaskComplete,
    currentAppearingTaskId,
    currentDeleteTaskId,
    searchQuery,
    setSearchQuery,
  } = useTasks()

  const { firstIncompleteTaskId, firstIncompleteTaskRef } =
    useIncompleteTaskScroll(tasks)

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      newTaskTitleRef,
      deleteAllTasks,
      deleteTask,
      addTask,
      toggleTaskComplete,
      currentAppearingTaskId,
      currentDeleteTaskId,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
      searchQuery,
      setSearchQuery,
    }),
    [
      tasks,
      filteredTasks,
      newTaskTitleRef,
      deleteAllTasks,
      deleteTask,
      addTask,
      toggleTaskComplete,
      currentAppearingTaskId,
      currentDeleteTaskId,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
      searchQuery,
      setSearchQuery,
    ],
  )

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
