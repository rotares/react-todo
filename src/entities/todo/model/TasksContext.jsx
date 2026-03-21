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
    newTaskTitle,
    searchQuery,
    newTaskTitleRef,
    deleteAllTasks,
    deleteTask,
    addTask,
    toggleTaskComplete,
    setSearchQuery,
    setNewTaskTitle,
    currentAppearingTaskId,
    currentDeleteTaskId,
  } = useTasks()

  const { firstIncompleteTaskId, firstIncompleteTaskRef } =
    useIncompleteTaskScroll(tasks)

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      newTaskTitle,
      searchQuery,
      newTaskTitleRef,
      deleteAllTasks,
      deleteTask,
      addTask,
      toggleTaskComplete,
      setSearchQuery,
      setNewTaskTitle,
      currentAppearingTaskId,
      currentDeleteTaskId,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
    }),
    [
      tasks,
      filteredTasks,
      newTaskTitle,
      searchQuery,
      newTaskTitleRef,
      deleteAllTasks,
      deleteTask,
      addTask,
      toggleTaskComplete,
      setSearchQuery,
      setNewTaskTitle,
      currentAppearingTaskId,
      currentDeleteTaskId,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
    ],
  )

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
