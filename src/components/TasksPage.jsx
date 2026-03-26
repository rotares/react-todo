import { TasksProvider } from "../context/TasksContext"
import { Todo } from "./Todo"

export const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}
