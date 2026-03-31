import { tasksAPI } from "@/entities/todo/api"
import TaskDetails from "@/features/todo-details/ui/TaskDetails"
import type { Task } from "@/shared/types"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export const TaskPage = () => {
  const [task, setTask] = useState<Task | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const { id } = useParams()

  useEffect(() => {
    if (!id) return

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
