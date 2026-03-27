export const Field = (props) => {
  const { value, label, id, type = "text", onInput, ref } = props

  return (
    <div className="todo__field field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        className="field__input"
        id={id}
        type={type}
        onInput={onInput}
        ref={ref}
        placeholder=" "
        autoComplete="off"
      />
    </div>
  )
}
