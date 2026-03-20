//наш url для запросов
const URL = 'http://localhost:3001/tasks'
const headers = {
  'Content-type': 'application/json',
}

//api для работы с задачами
const tasksAPI = {
  getAll: () => fetch(URL).then((res) => res.json()),

  getById: (id) => {
    return fetch(`${URL}/${id}`).then((res) => res.json())
  },

  add: (task) => {
    return fetch(URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(task),
    }).then((res) => res.json())
  },

  delete: (id) => {
    return fetch(`${URL}/${id}`, {
      method: 'DELETE',
    })
  },

  deleteAll: (tasks) => {
    return Promise.all(tasks.map(({ id }) => tasksAPI.delete(id)))
  },

  toggleComplete: (id, isDone) => {
    return fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ isDone }),
    })
  },
}

//возвращаем программный интерфейс
export default tasksAPI
