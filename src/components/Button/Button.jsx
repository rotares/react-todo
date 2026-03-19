import styles from "./Button.module.css"

function Button(props) {
  const {
    className = "",
    type = "button",
    children,
    onClick,
    isDisabled,
  } = props

  /* children - ребенок, то что мы передаем внутри тега <></> */
  return (
    <button
      disabled={isDisabled}
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
