import type { TasksContextValue } from "@/shared/types"
import { createContext, ReactNode, useContext, useMemo } from "react"
import { useIncompleteTaskScroll, useTasks } from "../hooks"

interface TasksContextProviderProps {
  children?: ReactNode
}

const TasksContext = createContext<TasksContextValue | null>(null)

export const TasksProvider = ({ children }: TasksContextProviderProps) => {
  const {
    tasks,
    addTask,
    changeCompleteStatus,
    deleteTask,
    deleteAllTasks,
    animationState,
    setAnimationState,
  } = useTasks()

  const { firstIncompleteTaskId, firstIncompleteTaskRef } =
    useIncompleteTaskScroll(tasks)

  const value = useMemo<TasksContextValue>(
    () => ({
      tasks,
      addTask,
      changeCompleteStatus,
      deleteTask,
      deleteAllTasks,
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
      animationState,
      setAnimationState,
    }),
    [
      tasks,
      addTask,
      changeCompleteStatus,
      deleteTask,
      deleteAllTasks,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
      animationState,
      setAnimationState,
    ],
  )

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

export const useTasksContext = () => {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error("error")
  }

  return context
}
