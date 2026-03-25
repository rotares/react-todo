import { useReducer } from 'react'
import { tasksAPI } from '../api/tasksAPI'

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
    }
  }

  const [tasks, dispatch] = useReducer(tasksReducer, [], () => tasksAPI.read())

  const addTask = (title) => {
    const newTask = tasksAPI.add(title)
    dispatch({ type: 'add', newTask })
  }

  const deleteTask = (id) => {
    tasksAPI.delete(id)
    dispatch({ type: 'delete', id })
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
  }
}
