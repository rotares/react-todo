import { useTasks } from "@/hooks/useTasks"
import { createContext, useContext, useMemo } from "react"

const TasksContext = createContext({})

export const TasksProvider = ({ children }) => {
  const { tasks, setTasks } = useTasks()

  const value = useMemo(
    () => ({
      tasks,
      setTasks,
    }),
    [tasks, setTasks],
  )

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

export const useTasksContext = () => {
  return useContext(TasksContext)
}
