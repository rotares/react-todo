import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import useTasksLocalStorage from './useTasksLocalStorage'

//кастомный хук
const useTasks = () => {
  const { savedTasks, saveTasks } = useTasksLocalStorage()

  //хук для обновления состояния, начальное состояние
  const [tasks, setTasks] = useState(savedTasks ?? [])

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskTitleRef = useRef(null)

  //сохраняем ссылку на функцию при ререндерах
  const deleteAllTasks = useCallback(() => {
    setTasks([])
  }, [])

  const deleteTask = useCallback(
    (id) => {
      //фильтруем массив
      setTasks(tasks.filter((task) => task.id !== id))
    },
    [tasks]
  )

  //изменяем состояние задачи
  const toggleTaskComplete = useCallback(
    (id, isDone) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return { ...task, isDone }
          }
          return task
        })
      )
    },
    [tasks]
  )

  const addTask = useCallback(() => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }
      //вызываем сеттеры useState
      setTasks((prevTasks) => [...prevTasks, newTask])
      setNewTaskTitle('')
      setSearchQuery('')

      newTaskTitleRef.current.focus()
    }
  }, [newTaskTitle])

  useEffect(() => {
    console.log('сохраняем')
    saveTasks(tasks)
  }, [tasks])

  //делаем фокус на инпуте
  useEffect(() => {
    newTaskTitleRef.current.focus()
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
    deleteAllTasks,
    deleteTask,
    addTask,
    toggleTaskComplete,
    setSearchQuery,
    setNewTaskTitle,
  }
}

export default useTasks
