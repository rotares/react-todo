import { useReducer, useState } from 'react'
import { tasksAPI } from '../../api'

export const useTasks = () => {
  const tasksReducer = (state, action) => {
    switch (action.type) {
      case 'add': {
        return [...state, action.newTask]
      }
      case 'delete': {
        return state.filter((task) => task.id !== action.id)
      }
      case 'changeStatus': {
        const { id, isCompleted } = action
        return state.map((task) => {
          return task.id === id
            ? {
                ...task,
                isCompleted,
              }
            : task
        })
      }
      case 'deleteAll': {
        return action.tasks
      }
      default:
        return state
    }
  }

  const [tasks, dispatch] = useReducer(tasksReducer, [], () => tasksAPI.read())
  //состояния для анимаций
  const [animationState, setAnimationState] = useState(new Map())

  const addTask = (title) => {
    const newTask = tasksAPI.add(title)
    dispatch({ type: 'add', newTask })
    return newTask
  }

  const deleteTask = (id) => {
    tasksAPI.delete(id)
    dispatch({ type: 'delete', id })
  }

  const deleteAllTasks = () => {
    const tasks = tasksAPI.deleteAll()
    dispatch({ type: 'deleteAll', tasks })
  }

  const changeCompleteStatus = (id, isCompleted) => {
    tasksAPI.toggleCompete(id, isCompleted)
    dispatch({ type: 'changeStatus', id, isCompleted })
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
