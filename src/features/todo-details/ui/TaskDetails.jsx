import { Button } from "@/shared/ui/Button"
import { useNavigate } from "react-router"
import styles from "./TodoDetails.module.css"

const TaskDetails = (props) => {
  let navigate = useNavigate()

  const { task } = props

  const onClick = () => {
    navigate("/")
  }

  return (
    <>
      <h1 className={styles.title}>Task Details</h1>

      <article className={styles.info}>
        <div>Task id: {task.id}</div>
        <div> Task Title: {task.title}</div>
        <div>Task Status: {task.isCompleted ? "completed" : "in process"}</div>
        <Button onClick={onClick}>back to previous page</Button>
      </article>
    </>
  )
}

export default TaskDetails
