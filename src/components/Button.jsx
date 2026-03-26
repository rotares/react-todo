export const Button = (props) => {
  const {
    className = "button",
    type = "submit",
    children,
    onClick,
    isDisabled,
    ...rest
  } = props

  return (
    <button
      className={className}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
