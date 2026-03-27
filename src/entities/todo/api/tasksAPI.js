const KEY = 'tasks'

export const tasksAPI = {
  read: () => {
    return JSON.parse(
      localStorage.getItem(KEY) ||
        JSON.stringify([{ id: 1, title: '23', isCompleted: true }])
    )
  },

  write: (tasks) => {
    localStorage.setItem(KEY, JSON.stringify(tasks))
  },

  add: (title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      isCompleted: false,
    }

    tasksAPI.write([...tasksAPI.read(), newTask])

    return newTask
  },

  delete: (id) => {
    const tasks = tasksAPI.read().filter((task) => task.id !== id)
    tasksAPI.write(tasks)
  },

  deleteAll: () => {
    tasksAPI.write([])
    return []
  },

  toggleCompete: (id, isCompleted) => {
    const tasks = tasksAPI.read().map((task) => {
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
