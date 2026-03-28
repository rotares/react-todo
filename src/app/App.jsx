import TaskPage from "@/pages/TaskPage"
import TasksPage from "@/pages/TasksPage"
import { Router } from "./routing"

const App = () => {
  const routes = {
    "/": TasksPage,
    "/tasks/:id": TaskPage,
    "*": () => <div>404 Not Found</div>,
  }
  return <Router routes={routes}></Router>
}

export default App
