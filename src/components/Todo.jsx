import { TodoInfo } from "./TodoInfo"
import { TodoList } from "./TodoList"

export const Todo = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <form className="todo__form">
        <div className="todo__field field">
          <label className="field__label" htmlFor="new-task">
            New task
          </label>
          <input
            className="field__input"
            id="new-task"
            placeholder=" "
            autoComplete="off"
          />
        </div>
        <button className="button" type="submit">
          Add
        </button>
      </form>
      <form className="todo__form">
        <div className="todo__field field">
          <label className="field__label" htmlFor="search-task">
            Search task
          </label>
          <input
            className="field__input"
            id="search-task"
            placeholder=" "
            autoComplete="off"
            type="search"
          />
        </div>
      </form>
      <TodoList />
      <TodoInfo />
    </div>
  )
}
