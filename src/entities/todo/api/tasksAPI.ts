const KEY = "tasks"
import { type Task, Tasks } from "@/shared/types"

export const tasksAPI = {
  read: (): Tasks => {
    return JSON.parse(
      localStorage.getItem(KEY) ||
        JSON.stringify([{ id: 1, title: "23", isCompleted: true }]),
    )
  },

  write: (tasks: Tasks): void => {
    localStorage.setItem(KEY, JSON.stringify(tasks))
  },

  add: (title: Task["title"]): Task => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      isCompleted: false,
    }

    tasksAPI.write([...tasksAPI.read(), newTask])

    return newTask
  },

  getById: (id: Task["id"]): Task | null => {
    return tasksAPI.read().find((task: Task) => task.id === id) ?? null
  },

  delete: (id: string): void => {
    const tasks = tasksAPI.read().filter((task: Task) => task.id !== id)
    tasksAPI.write(tasks)
  },

  deleteAll: (): Tasks => {
    tasksAPI.write([])
    return []
  },

  toggleCompete: (id: Task["id"], isCompleted: Task["isCompleted"]): void => {
    const tasks = tasksAPI.read().map((task: Task) => {
      return task.id === id
        ? {
            ...task,
            isCompleted,
          }
        : task
    })

    tasksAPI.write(tasks)
  },
}
