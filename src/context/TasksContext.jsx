import { useTasks } from "@/hooks/useTasks"
import { createContext, useContext, useMemo } from "react"

const TasksContext = createContext({})

export const TasksProvider = ({ children }) => {
  const { tasks, addTask, changeCompleteStatus, deleteTask, deleteAllTasks } =
    useTasks()

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      changeCompleteStatus,
      deleteTask,
      deleteAllTasks,
    }),
    [tasks, addTask, changeCompleteStatus, deleteTask, deleteAllTasks],
  )

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

export const useTasksContext = () => {
  return useContext(TasksContext)
}
