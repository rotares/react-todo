import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

function Todo() {
  //хук для обновления состояния, начальное состояние
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "task1", isDone: true },
    { id: "task-2", title: "task2", isDone: false },
  ])

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
    console.log(isDone)
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
