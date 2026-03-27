import { TodoList } from "@/entities/todo"
import { SearchTasksProvider, useTasksContext } from "@/entities/todo/model"
import { AddTaskForm } from "@/features/add-task"
import { SearchTaskForm } from "@/features/search-task"
import { TodoInfo } from "@/features/todo-info"
import { Button } from "@/shared/ui/Button"

import styles from "./Todo.module.css"

export const Todo = () => {
  const title = `To Do List`
  const { firstIncompleteTaskRef } = useTasksContext()

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>{title}</h1>
      <AddTaskForm styles={styles} />
      <SearchTasksProvider>
        <SearchTaskForm styles={styles} />
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
        <TodoInfo styles={styles} />
        <TodoList styles={styles} />
      </SearchTasksProvider>
    </div>
  )
}
