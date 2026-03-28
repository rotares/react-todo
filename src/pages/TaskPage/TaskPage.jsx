import TaskDetails from "@/features/todo-details/ui/TaskDetails"
import { useEffect, useState } from "react"
import { tasksAPI } from "../../entities/todo/api"

export const TaskPage = (props) => {
  const { params } = props
  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
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
    return <TaskDetails task={task} />
  }

  if (error) {
    return <div>Error... Please back</div>
  }
}

export default TaskPage
