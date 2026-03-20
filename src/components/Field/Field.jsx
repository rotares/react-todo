import styles from "./Field.module.css"

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
    <div className={`${styles.field} ${className} `}>
      <label className={`${styles.label}`} htmlFor={id}>
        {label}
      </label>
      <input
        className={`${styles.input} ${error ? styles.isInvalid : ""}`}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
        value={value}
        ref={ref}
      />
      {error && (
        <span title={error} className={styles.error}>
          {error}
        </span>
      )}
    </div>
  )
}

export default Field
