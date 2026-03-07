import { useState, useEffect } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

function Todo() {
  //хук для обновления состояния, начальное состояние
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"))

    if (savedTasks) return savedTasks
    return []
  })

  //состояние для названия задачи
  const [newTaskTitle, setNewTaskTitle] = useState("")

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

  //поиск задачи
  const filterTasks = (query) => {
    console.log("ПОИСК", query)
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

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllTasksButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChangeButton={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo
