function Field(props) {
  //принимаем пропсами
  const {
    className = "",
    id,
    label,
    type = "text",
    onInput,
    value,
    ref,
    error,
  } = props

  return (
    <div className={`field ${className} `}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`field__input ${error ? "is-invalid" : ""}`}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
        value={value}
        ref={ref}
      />
      {error && (
        <span title={error} className="field__error">
          {error}
        </span>
      )}
    </div>
  )
}

export default Field
