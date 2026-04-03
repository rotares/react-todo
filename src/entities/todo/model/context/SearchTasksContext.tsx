import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react"

interface SearchTaskValue {
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}

interface SearchTaskProps {
  children?: ReactNode
}

const SearchTasksContext = createContext<SearchTaskValue | null>(null)

export const SearchTasksProvider = ({ children }: SearchTaskProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const value = useMemo<SearchTaskValue>(
    () => ({
      searchQuery,
      setSearchQuery,
    }),
    [searchQuery],
  )

  return (
    <SearchTasksContext.Provider value={value}>
      {children}
    </SearchTasksContext.Provider>
  )
}

export const useSearchContext = () => {
  const context = useContext(SearchTasksContext)

  if (!context) {
    throw new Error("no context")
  }

  return context
}
