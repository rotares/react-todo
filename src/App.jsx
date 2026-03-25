import { TasksProvider } from "@/context/TasksContext"
import { TasksPage } from "./components/TasksPage"

const App = () => {
  return (
    <TasksProvider>
      <TasksPage />
    </TasksProvider>
  )
}

export default App
