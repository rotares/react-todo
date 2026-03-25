import { useState } from 'react'

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => [
    { id: Date.now().toString() + '1', title: '123', isCompleted: true },
    { id: Date.now().toString(), title: '321', isCompleted: false },
  ])

  return {
    tasks,
    setTasks,
  }
}
