import { SearchTasksProvider } from "../context/SearchTasksContext"
import { useTasksContext } from "../context/TasksContext"
import { AddTaskForm } from "./AddTaskForm"
import { Button } from "./Button"
import { SearchTaskForm } from "./SearchTaskForm"
import { TodoInfo } from "./TodoInfo"
import { TodoList } from "./TodoList"
export const Todo = () => {
  const title = `To Do List`
  const { firstIncompleteTaskRef } = useTasksContext()

  return (
    <div className="todo">
      <h1 className="todo__title">{title}</h1>
      <AddTaskForm />
      <SearchTasksProvider>
        <SearchTaskForm />
        <Button
          onClick={() => {
            firstIncompleteTaskRef?.current.scrollIntoView({
              behaviour: "smooth",
              block: "center",
            })
          }}
        >
          Scroll to incomplete task
        </Button>
        <TodoInfo />
        <TodoList />
      </SearchTasksProvider>
    </div>
  )
}
