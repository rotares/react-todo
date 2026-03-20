import { TasksContext, TodoList } from "@/entities/todo"
import AddTaskForm from "@/features/add-task"
import SearchTaskForm from "@/features/search-task"
import TodoInfo from "@/features/stat-task"
import Button from "@/shared/ui/Button"
import { useContext } from "react"
import styles from "./Todo.module.css"

function Todo() {
  const { firstIncompleteTaskRef } = useContext(TasksContext)

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <TodoInfo styles={styles} />
      <Button
        onClick={() => {
          firstIncompleteTaskRef.current?.scrollIntoView({
            behaviour: "smooth",
          })
        }}
      >
        Show first incomplete task
      </Button>
      <TodoList styles={styles} />
    </div>
  )
}

export default Todo
