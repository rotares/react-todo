import styles from "./Button.module.css"

export const Button = (props) => {
  const { type = "submit", children, onClick, isDisabled, ...rest } = props

  return (
    <button
      className={` ${styles.button}`}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
