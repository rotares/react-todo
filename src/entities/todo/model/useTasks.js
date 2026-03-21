import tasksAPI from '@/shared/api/tasks'
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'

//кастомный хук
const useTasks = () => {
  //действия для редюсера
  const reducerActions = {
    add: 'ADD',
    delete: 'DELETE',
    deleteAll: 'DELETE_ALL',
    toggleComplete: 'TOGGLE_COMPLETE',
    setAll: 'SET_ALL',
  }

  const tasksReducer = (state, action) => {
    switch (action.type) {
      case reducerActions.setAll: {
        return Array.isArray(action.tasks) ? action.tasks : state
      }
      case reducerActions.add: {
        return [...state, action.task]
      }
      case reducerActions.delete: {
        return state.filter((task) => task.id !== action.id)
      }
      case reducerActions.deleteAll: {
        return []
      }
      case reducerActions.toggleComplete: {
        const { id, isDone } = action

        return state.map((task) => {
          return task.id === id
            ? {
                ...task,
                isDone,
              }
            : task
        })
      }
      default: {
        return state
      }
    }
  }

  //хук для обновления состояния, начальное состояние
  const [tasks, dispatch] = useReducer(tasksReducer, [])

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskTitleRef = useRef(null)

  //для удаляемой задачи
  const [currentDeleteTaskId, setCurrentDeleteTaskId] = useState(null)
  const [currentAppearingTaskId, setCurrentAppearingTaskId] = useState(null)

  //сохраняем ссылку на функцию при ререндерах
  const deleteAllTasks = useCallback(() => {
    //используем promise.all, ждем пока все запросы выполнятся
    tasksAPI
      .deleteAll(tasks)
      .then(() => dispatch({ type: reducerActions.deleteAll }))
      .catch(console.log)
  }, [tasks])

  const deleteTask = useCallback((id) => {
    //делаем fetch для удаления, после обновляем локально
    tasksAPI
      .delete(id)
      .then(() => {
        setCurrentDeleteTaskId(id)
        setTimeout(() => {
          dispatch({ type: reducerActions.delete, id })
          setCurrentDeleteTaskId(null)
        }, 400)
      })
      .catch(console.log)
  }, [])

  //изменяем состояние задачи
  const toggleTaskComplete = useCallback((id, isDone) => {
    tasksAPI
      .toggleComplete(id, isDone)
      .then(
        () => dispatch({ type: reducerActions.toggleComplete, id, isDone }),
        console.log
      )
  }, [])

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    }

    //делаем fetch запроос, метод POST
    tasksAPI
      .add(newTask)
      .then((addedTask) => {
        dispatch({ type: reducerActions.add, task: addedTask })
        setNewTaskTitle('')
        setSearchQuery('')
        newTaskTitleRef.current.focus()
        //устанавливаем  айди добавляемой задачи
        setCurrentAppearingTaskId(addedTask.id)
        //обнуляем
        setTimeout(() => setCurrentAppearingTaskId(null), 400)
      })
      .catch(console.log)
  }, [])

  //делаем фокус на инпуте
  //делаем fetch запрос
  useEffect(() => {
    newTaskTitleRef.current.focus()

    //далем get запрос от сервака
    tasksAPI
      .getAll()
      .then((serverTasks) =>
        dispatch({ type: reducerActions.setAll, tasks: serverTasks })
      )
      .catch(console.log)
  }, [])

  //фильтрованный массив
  const filteredTasks = useMemo(() => {
    //получаем строку без пробелов
    const clearSearchQuery = searchQuery.toLowerCase().trim().length > 0

    return clearSearchQuery
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : null
  }, [searchQuery, tasks])

  return {
    tasks,
    filteredTasks,
    newTaskTitle,
    searchQuery,
    newTaskTitleRef,
    currentDeleteTaskId,
    currentAppearingTaskId,
    deleteAllTasks,
    deleteTask,
    addTask,
    toggleTaskComplete,
    setSearchQuery,
    setNewTaskTitle,
  }
}

export default useTasks
