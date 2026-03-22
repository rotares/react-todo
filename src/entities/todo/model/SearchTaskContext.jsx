import { createContext, useContext, useMemo, useState } from "react"

const SearchTaskContext = createContext({})

const SearchTaskProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const value = useMemo(
    () => ({
      searchQuery,
      setSearchQuery,
    }),
    [searchQuery, setSearchQuery],
  )

  return (
    <SearchTaskContext.Provider value={value}>
      {children}
    </SearchTaskContext.Provider>
  )
}

const useSearchTask = () => {
  return useContext(SearchTaskContext)
}

export { SearchTaskProvider, useSearchTask }
