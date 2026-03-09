import { useState, useEffect, useRef } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
import Button from "./Button"

function Todo() {
  console.log("todo")
  //хук для обновления состояния, начальное состояние
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"))

    if (savedTasks) return savedTasks
    return []
  })

  //состояние для названия задачи
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const newTaskTitleRef = useRef(null)

  //обработка для первого невыполненного task
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id

  const deleteAllTasks = () => {
    setTasks([])
  }

  const deleteTask = (id) => {
    //фильтруем массив
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //изменяем состояние задачи
  const toggleTaskComplete = (id, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone }
        }
        return task
      }),
    )
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }
      //вызываем сеттеры useState
      setTasks([...tasks, newTask])
      setNewTaskTitle("")
      setSearchQuery("")

      newTaskTitleRef.current.focus()
    }
  }

  //хук для сайд эффектов, отслеживает изменения зависимостей и выполняет инструкции
  //аналог watch во vue

  // useEffect(() => {
  //   console.log("парсим данные")
  //   const savedTasks = JSON.parse(localStorage.getItem("tasks"))

  //   console.log(savedTasks, "savedTasks")

  //   if (savedTasks) {
  //     setTasks(savedTasks)
  //   }
  // }, [])

  useEffect(() => {
    console.log("сохраняем")
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  //делаем фокус на инпуте
  useEffect(() => {
    newTaskTitleRef.current.focus()
  }, [])

  //получаем строку без пробелов
  const clearSearchQuery = searchQuery.toLowerCase().trim().length > 0

  //фильтрованный массив
  const filteredTasks = clearSearchQuery
    ? tasks.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : null

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitleRef={newTaskTitleRef}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllTasksButtonClick={deleteAllTasks}
      />
      <Button
        onClick={() => {
          firstIncompleteTaskRef.current?.scrollIntoView({
            behaviour: "smooth",
          })
          console.log(firstIncompleteTaskRef, firstIncompleteTaskId)
        }}
      >
        Show first incomplete task
      </Button>
      <TodoList
        tasks={tasks}
        filteredTasks={filteredTasks}
        firstIncompleteTaskRef={firstIncompleteTaskRef}
        firstIncompleteTaskId={firstIncompleteTaskId}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChangeButton={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo
