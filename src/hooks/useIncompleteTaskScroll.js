import { useRef } from 'react'

//хук для скролла к задаче
const useIncompleteTaskScroll = (tasks) => {
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id

  return {
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  }
}

export default useIncompleteTaskScroll
