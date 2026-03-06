import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

function Todo() {
  //временный массив с тасками
  const tasks = [
    { id: "task-1", title: "task1", isDone: true },
    { id: "task-2", title: "task2", isDone: false },
  ]

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
      />
      <TodoList tasks={tasks} />
    </div>
  )
}

export default Todo
