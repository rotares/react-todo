import TaskPage from "@/pages/TaskPage"
import TasksPage from "@/pages/TasksPage/"
import { BrowserRouter, Route, Routes } from "react-router"

// const router = createBrowserRouter([
//   { path: "/", element: <TasksPage /> },
//   { path: "/tasks/:id", element: <TaskPage /> },
//   { path: "*", element: <div>404 Not Found</div> },
// ])

const App = () => {
  // return <RouterProvider router={router} />
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TasksPage />} />
        <Route path="tasks">
          <Route path=":id" element={<TaskPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
