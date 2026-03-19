import TasksPage from "./pages/TasksPage"
import TaskPage from "./pages/TaskPage"
import Router from "./Router"

const App = () => {
  const routes = {
    "/": TasksPage,
    "/tasks/:id": TaskPage,
    "*": () => <div>404 Not Found</div>,
  }
  return <Router routes={routes}></Router>
}

export default App
