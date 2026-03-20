import tasksApi from "@/shared/api/tasks"
import { useEffect, useState } from "react"

const TaskPage = (props) => {
  const { params } = props

  const [task, setTask] = useState(null)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  //получаем данные о задаче
  useEffect(() => {
    tasksApi
      .getById(params.id)
      .then((taskData) => {
        console.log(taskData)
        setTask(taskData)
        setIsError(false)
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return <h1>{task.title}</h1>
}

export default TaskPage
