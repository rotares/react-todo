import { useEffect, useState } from "react"

//получаем и устанавливаем роут
const useRoute = () => {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname)
    }

    //меняем роут по событию (попстейт вызывается при смене страницы < >)
    window.addEventListener("popstate", onLocationChange)

    return () => {
      window.removeEventListener("popstate", onLocationChange)
    }
  }, [])

  return path
}

//роутер, пропами получаем роуты из app
const Router = (props) => {
  const { routes } = props
  const route = useRoute()

  //если роут начинается с tasks то, вытаскиваем айди
  if (route.startsWith("/tasks/")) {
    const id = route.replace("/tasks/", "")

    const TaskPage = routes["/tasks/:id"]

    return <TaskPage params={{ id }} />
  }

  // в другом случае, просто ставим роут без чего либо
  const Page = routes[route] ?? routes["*"]
  return <Page />
}

export default Router
