import TaskPage from "@/pages/TaskPage"
import TasksPage from "@/pages/TasksPage/"
import { BASE_URL } from "@/shared/constants"
import { BrowserRouter, Route, Routes } from "react-router"
import "./ui/index"

const App = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route index element={<TasksPage />} />
        <Route path="tasks">
          <Route path=":id" element={<TaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
