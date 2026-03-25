import { useTasks } from "@/hooks/useTasks"
import { createContext, useContext, useMemo } from "react"

const TasksContext = createContext({})

export const TasksProvider = ({ children }) => {
  const { tasks, addTask, changeCompleteStatus, deleteTask } = useTasks()

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      changeCompleteStatus,
      deleteTask,
    }),
    [tasks, addTask, changeCompleteStatus, deleteTask],
  )

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

export const useTasksContext = () => {
  return useContext(TasksContext)
}
