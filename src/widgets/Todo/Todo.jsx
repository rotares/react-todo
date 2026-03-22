import { TasksContext, TodoList } from "@/entities/todo"
import { SearchTaskProvider } from "@/entities/todo/model/SearchTaskContext"
import AddTaskForm from "@/features/add-task"
import SearchTaskForm from "@/features/search-task"
import TodoInfo from "@/features/stat-task"
import Button from "@/shared/ui/Button"
import { memo, useContext } from "react"
import styles from "./Todo.module.css"

function Todo() {
  const { firstIncompleteTaskRef } = useContext(TasksContext)

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm styles={styles} />

      <SearchTaskProvider>
        <SearchTaskForm styles={styles} />
        <Button
          onClick={() => {
            firstIncompleteTaskRef.current?.scrollIntoView({
              behaviour: "smooth",
            })
          }}
        >
          Show first incomplete task
        </Button>
        <TodoInfo styles={styles} />
        <TodoList styles={styles} />
      </SearchTaskProvider>
    </div>
  )
}

export default memo(Todo)
