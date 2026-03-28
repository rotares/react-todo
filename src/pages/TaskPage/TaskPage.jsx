import { useEffect, useState } from "react"
import { tasksAPI } from "../../entities/todo/api"

export const TaskPage = (props) => {
  const { params } = props
  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const task = tasksAPI.getById(params.id)

    if (task) {
      setTask(task)
    } else {
      setError(true)
    }

    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (task && !isLoading) {
    return (
      <div>
        <div>ID: {task.id}</div>
        <div>Title: {task.title}</div>
        <div>Status: {task.isCompleted ? "completed" : "uncompleted"}</div>
      </div>
    )
  }

  if (error) {
    return <div>Error... Please back</div>
  }
}

export default TaskPage
