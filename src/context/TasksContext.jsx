import { useTasks } from "@/hooks/useTasks"
import { createContext, useContext, useMemo } from "react"
import { useIncompleteTaskScroll } from "../hooks/useIncompleteTaskScroll"

const TasksContext = createContext({})

export const TasksProvider = ({ children }) => {
  const { tasks, addTask, changeCompleteStatus, deleteTask, deleteAllTasks } =
    useTasks()

  const { firstIncompleteTaskId, firstIncompleteTaskRef } =
    useIncompleteTaskScroll(tasks)

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      changeCompleteStatus,
      deleteTask,
      deleteAllTasks,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
    }),
    [
      tasks,
      addTask,
      changeCompleteStatus,
      deleteTask,
      deleteAllTasks,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    ],
  )

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

export const useTasksContext = () => {
  return useContext(TasksContext)
}
