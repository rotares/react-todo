import { TasksProvider } from "@/entities/todo/model/TasksContext"
import { Todo } from "@/widgets/Todo"

export const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default TasksPage
