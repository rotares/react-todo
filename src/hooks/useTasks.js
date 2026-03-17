import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

//кастомный хук
const useTasks = () => {
  //хук для обновления состояния, начальное состояние
  const [tasks, setTasks] = useState([])

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskTitleRef = useRef(null)

  //сохраняем ссылку на функцию при ререндерах
  const deleteAllTasks = useCallback(() => {
    //используем promise.all, ждем пока все запросы выполнятся
    Promise.all(
      tasks.map(({ id }) =>
        fetch(`http://localhost:3001/tasks/${id}`, {
          method: 'DELETE',
        })
      )
    )
      .then(() => setTasks([]))
      .catch(console.log)
  }, [tasks])

  const deleteTask = useCallback(
    (id) => {
      //делаем fetch для удаления, после обновляем локально
      fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          //фильтруем массив
          setTasks(tasks.filter((task) => task.id !== id))
        })
        .catch(console.log)
    },
    [tasks]
  )

  //изменяем состояние задачи
  const toggleTaskComplete = useCallback(
    (id, isDone) => {
      fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ isDone }),
      }).then(() =>
        setTasks(
          tasks.map((task) => {
            if (task.id === id) {
              return { ...task, isDone }
            }
            return task
          }),
          console.log
        )
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
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((addedTask) => {
        setTasks((prevTasks) => [...prevTasks, addedTask])
        setNewTaskTitle('')
        setSearchQuery('')

        newTaskTitleRef.current.focus()
      })
      .catch(console.log)
  }, [])

  //делаем фокус на инпуте
  //делаем fetch запрос
  useEffect(() => {
    newTaskTitleRef.current.focus()

    //далем get запрос от сервака
    fetch('http://localhost:3001/tasks')
      .then((response) => response.json())
      .then(setTasks)
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
    deleteAllTasks,
    deleteTask,
    addTask,
    toggleTaskComplete,
    setSearchQuery,
    setNewTaskTitle,
  }
}

export default useTasks
