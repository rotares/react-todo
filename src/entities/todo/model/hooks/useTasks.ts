import type { AnimationState, Task, TaskReducer, Tasks } from "@/shared/types"
import { useReducer, useState } from "react"
import { tasksAPI } from "../../api"

export const useTasks = () => {
  const tasksReducer = (state: Tasks, action: TaskReducer) => {
    switch (action.type) {
      case "add": {
        return [...state, action.newTask]
      }
      case "delete": {
        return state.filter((task: Task) => task.id !== action.id)
      }
      case "changeStatus": {
        const { id, isCompleted } = action
        return state.map((task: Task) => {
          return task.id === id
            ? {
                ...task,
                isCompleted,
              }
            : task
        })
      }
      case "deleteAll": {
        return action.tasks
      }
      default:
        return state
    }
  }

  const [tasks, dispatch] = useReducer(tasksReducer, [], () => tasksAPI.read())
  //состояния для анимаций

  const [animationState, setAnimationState] = useState<
    Map<Task["id"], AnimationState>
  >(new Map())

  const addTask = (title: Task["title"]) => {
    const newTask = tasksAPI.add(title)
    dispatch({ type: "add", newTask })
    return newTask
  }

  const deleteTask = (id: Task["id"]) => {
    tasksAPI.delete(id)
    dispatch({ type: "delete", id })
  }

  const deleteAllTasks = () => {
    const tasks = tasksAPI.deleteAll()
    dispatch({ type: "deleteAll", tasks })
  }

  const changeCompleteStatus = (
    id: Task["id"],
    isCompleted: Task["isCompleted"],
  ) => {
    tasksAPI.toggleCompete(id, isCompleted)
    dispatch({ type: "changeStatus", id, isCompleted })
  }

  return {
    tasks,
    addTask,
    changeCompleteStatus,
    deleteTask,
    deleteAllTasks,
    animationState,
    setAnimationState,
  }
}
