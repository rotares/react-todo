import tasksAPI from '@/shared/api/tasks'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

//кастомный хук
const useTasks = () => {
  //хук для обновления состояния, начальное состояние
  const [tasks, setTasks] = useState([])

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
      .then(() => setTasks([]))
      .catch(console.log)
  }, [tasks])

  const deleteTask = useCallback(
    (id) => {
      //делаем fetch для удаления, после обновляем локально
      tasksAPI
        .delete(id)
        .then(() => {
          setCurrentDeleteTaskId(id)
          setTimeout(() => {
            setTasks(tasks.filter((task) => task.id !== id))
            setCurrentDeleteTaskId(null)
          }, 400)
        })
        .catch(console.log)
    },
    [tasks]
  )

  //изменяем состояние задачи
  const toggleTaskComplete = useCallback(
    (id, isDone) => {
      tasksAPI.toggleComplete(id, isDone).then(
        () =>
          setTasks(
            tasks.map((task) => {
              if (task.id === id) {
                return { ...task, isDone }
              }
              return task
            })
          ),
        console.log
      )
    },

    [tasks]
  )

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    }

    //делаем fetch запроос, метод POST
    tasksAPI
      .add(newTask)
      .then((addedTask) => {
        setTasks((prevTasks) => [...prevTasks, addedTask])
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
    tasksAPI.getAll().then(setTasks).catch(console.log)
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
