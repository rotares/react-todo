import { useEffect, useState } from "react"

const split = (path, route) => {
  const splittedPath = path.split("/")
  const splittedRoute = route.split("/")

  if (splittedPath.length !== splittedRoute.length) {
    return null
  }

  const params = {}

  splittedRoute.forEach((part, index) => {
    if (part.startsWith(":")) {
      const param = part.slice(1)
      params[param] = splittedPath[index]
    } else if (part !== splittedPath[index]) {
      return null
    }
  })

  return params
}

export const Router = (props) => {
  const { routes } = props

  const [currentPath, setCurrentPath] = useState(location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(location.pathname)
    }
    window.addEventListener("popstate", onLocationChange)
    return () => window.removeEventListener("popstate", onLocationChange)
  }, [])

  for (const route in routes) {
    const params = split(currentPath, route)

    if (params) {
      const Page = routes[route]
      return <Page params={params} />
    }
  }

  const NotFoundPage = routes["*"]
  return <NotFoundPage />
}
