import TaskPage from "@/pages/TaskPage"
import TasksPage from "@/pages/TasksPage/"
import { BASE_URL } from "@/shared/constants"
import { BrowserRouter, Route, Routes } from "react-router"
import "./ui/index"
// const router = createBrowserRouter([
//   { path: "/", element: <TasksPage /> },
//   { path: "/tasks/:id", element: <TaskPage /> },
//   { path: "*", element: <div>404 Not Found</div> },
// ])

const App = () => {
  // return <RouterProvider router={router} />

  const getCurrentPath = () => {
    const pathname = location.pathname

    return pathname.startsWith(BASE_URL)
      ? pathname.slice(BASE_URL.length - 1) || "/"
      : pathname
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TasksPage />} />
        <Route path={`${getCurrentPath()}tasks`}>
          <Route path=":id" element={<TaskPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
