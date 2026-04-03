import { TasksProvider } from "@/entities/todo/model"
import { Todo } from "@/widgets/Todo"

export const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default TasksPage
