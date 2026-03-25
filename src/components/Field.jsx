export const Field = (props) => {
  const { label, id, type = "text", onInput } = props

  return (
    <div className="todo__field field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        type={type}
        onInput={onInput}
        placeholder=" "
        autoComplete="off"
      />
    </div>
  )
}
