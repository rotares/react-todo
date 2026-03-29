import { tasksAPI } from "@/entities/todo/api"
import TaskDetails from "@/features/todo-details/ui/TaskDetails"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export const TaskPage = () => {
  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const task = tasksAPI.getById(id)

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
    return <TaskDetails task={task} />
  }

  if (error) {
    return <div>Error... Please back</div>
  }
}

export default TaskPage
