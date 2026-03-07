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
    console.log("удаляем все")
  }

  const deleteTask = (id) => {
    console.log("удаляем", id)
  }

  const toggleTaskComplete = (id, isDone) => {
    console.log(
      `задача ${id}, имеет состояние ${isDone ? "выполнена" : "активна"}`,
    )
  }

  //поиск задачи
  const filterTasks = (query) => {
    console.log("ПОИСК", query)
  }

  const addTask = () => {
    console.log("задача добавлена")
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
