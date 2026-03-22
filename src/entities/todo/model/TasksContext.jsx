// импортируем кастомный хук
import { createContext, useMemo } from "react"
import useIncompleteTaskScroll from "./useIncompleteTaskScroll"
import useTasks from "./useTasks"

export const TasksContext = createContext({})

export default function TasksProvider({ children }) {
  //получаем сущности из хука
  const {
    tasks,
    newTaskTitleRef,
    deleteAllTasks,
    deleteTask,
    addTask,
    toggleTaskComplete,
    currentAppearingTaskId,
    currentDeleteTaskId,
  } = useTasks()

  const { firstIncompleteTaskId, firstIncompleteTaskRef } =
    useIncompleteTaskScroll(tasks)

  const value = useMemo(
    () => ({
      tasks,
      newTaskTitleRef,
      deleteAllTasks,
      deleteTask,
      addTask,
      toggleTaskComplete,
      currentAppearingTaskId,
      currentDeleteTaskId,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
    }),
    [
      tasks,
      newTaskTitleRef,
      deleteAllTasks,
      deleteTask,
      addTask,
      toggleTaskComplete,
      currentAppearingTaskId,
      currentDeleteTaskId,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
    ],
  )

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
