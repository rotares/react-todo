import styles from "./Field.module.css"

export const Field = (props) => {
  const { className, value, label, id, type = "text", onInput, ref } = props

  return (
    <div className={`${className} ${styles.field}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        className={styles.input}
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
