import { TodoList } from "@/entities/todo"
import { SearchTasksProvider, useTasksContext } from "@/entities/todo/model"
import { AddTaskForm } from "@/features/add-task"
import { SearchTaskForm } from "@/features/search-task"
import { TodoInfo } from "@/features/todo-info"
import { Button } from "@/shared/ui/Button"
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
            firstIncompleteTaskRef?.current?.scrollIntoView({
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
