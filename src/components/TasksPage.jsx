import { AddTaskForm } from "./AddTaskForm"
import { SearchTaskForm } from "./SearchTaskForm"
import { TodoInfo } from "./TodoInfo"
import { TodoList } from "./TodoList"

export const TasksPage = () => {
  const title = `To Do List`

  return (
    <div className="todo">
      <h1 className="todo__title">{title}</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList />
    </div>
  )
}
