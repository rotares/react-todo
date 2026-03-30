export interface Task {
  id: string
  title: string
  isCompleted: boolean
}

export type Tasks = Task[]

export type TaskReducer =
  | { type: "add"; newTask: Task }
  | { type: "delete"; id: Task["id"] }
  | { type: "changeStatus"; id: Task["id"]; isCompleted: Task["isCompleted"] }
  | { type: "deleteAll"; tasks: Tasks }

export interface AnimationState {
  add?: boolean
  delete?: boolean
}

export interface TasksContextValue {
  tasks: Tasks

  addTask: (title: Task["id"]) => Task
  changeCompleteStatus: (
    id: Task["id"],
    isCompleted: Task["isCompleted"],
  ) => void
  deleteTask: (id: Task["id"]) => void
  deleteAllTasks: () => void

  animationState: Map<Task["id"], AnimationState>
  setAnimationState: React.Dispatch<
    React.SetStateAction<Map<Task["id"], AnimationState>>
  >

  firstIncompleteTaskId: Task["id"] | undefined
  firstIncompleteTaskRef: React.RefObject<HTMLDivElement | null>
}
