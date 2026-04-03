import { useEffect, useState } from "react"

const split = (path: string, route: string) => {
  const splittedPath = path.split("/")
  const splittedRoute = route.split("/")

  if (splittedPath.length !== splittedRoute.length) {
    return null
  }

  const params: RouteParams = {}

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

type RouteParams = Record<string, string>
type RouteComponent = React.FC<{ params?: RouteParams }>

interface propsRouter {
  routes: Record<string, RouteComponent>
}

export const Router = (props: propsRouter) => {
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
