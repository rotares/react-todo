import TaskPage from "@/pages/TaskPage"
import TasksPage from "@/pages/TasksPage"
import { Router } from "./routing/Router"

const App = () => {
  const routes = {
    "/": TasksPage,
    "/tasks/:id": TaskPage,
    "*": <div>4024 Not Found</div>,
  }
  return <Router routes={routes}></Router>
}

export default App
