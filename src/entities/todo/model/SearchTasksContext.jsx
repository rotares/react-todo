import { createContext, useContext, useMemo, useState } from "react"

const SearchTasksContext = createContext({})

export const SearchTasksProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const value = useMemo(
    () => ({
      searchQuery,
      setSearchQuery,
    }),
    [searchQuery, setSearchQuery],
  )

  return (
    <SearchTasksContext.Provider value={value}>
      {children}
    </SearchTasksContext.Provider>
  )
}

export const useSearchContext = () => {
  return useContext(SearchTasksContext)
}
