import type { Tasks } from "@/shared/types"
import { useRef } from "react"

export const useIncompleteTaskScroll = (tasks: Tasks) => {
  const firstIncompleteTaskId: string | undefined = tasks.find(
    ({ isCompleted }) => !isCompleted,
  )?.id

  const firstIncompleteTaskRef = useRef<HTMLLIElement>(null)

  return {
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  }
}
