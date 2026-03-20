// импортируем кастомный хук
import { createContext } from "react"
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

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        newTaskTitle,
        searchQuery,
        newTaskTitleRef,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
        deleteAllTasks,
        deleteTask,
        addTask,
        toggleTaskComplete,
        setSearchQuery,
        setNewTaskTitle,
        currentDeleteTaskId,
        currentAppearingTaskId,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
