import { useRef } from 'react'

export const useIncompleteTaskScroll = (tasks) => {
  const firstIncompleteTaskId = tasks.find(
    ({ isCompleted }) => !isCompleted
  )?.id
  const firstIncompleteTaskRef = useRef(null)

  return {
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  }
}
