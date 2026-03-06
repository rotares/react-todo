function Field(props) {
  //принимаем пропсами
  const { className = "", id, label, type = "text" } = props

  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
      />
    </div>
  )
}

export default Field
