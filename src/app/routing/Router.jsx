import { BASE_URL } from "@/shared/constants"
import { useEffect, useState } from "react"

const getCurrentPath = () => {
  const pathname = window.location.pathname

  return pathname.startsWith(BASE_URL)
    ? pathname.slice(BASE_URL.length - 1) || "/"
    : pathname
}

const mathPath = (path, route) => {
  const pathParts = path.split("/")
  const routeParts = route.split("/")

  //если длина разная, то пути не совпадают
  if (pathParts.length !== routeParts.length) {
    return null
  }

  //параметры
  const params = {}

  routeParts.forEach((part, index) => {
    //роуты уже одинаковой длины
    //part - часть роута
    if (part.startsWith(":")) {
      //если начинается с : выявляем параметр
      const partName = part.slice(1)
      params[partName] = pathParts[index]
    } else if (part !== pathParts[index]) {
      return null
    }
  })
  // если роут не динамический, но совпадает, вернется пустой обьект
  return params
}

//получаем и устанавливаем роут
const useRoute = () => {
  const [path, setPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setPath(getCurrentPath())
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

  //получаем путь
  const path = useRoute()

  //перебираем роуты
  for (const route in routes) {
    const params = mathPath(path, route)
    //если есть совпадение
    if (params) {
      //получаем компонент и возвращаем его
      const Page = routes[route]
      return <Page params={params} />
    }
  }

  // в другом случае, просто ставим роут без чего либо
  const NotFound = routes["*"]
  return <NotFound />
}

export default Router
