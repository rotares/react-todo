export const Button = (props) => {
  const {
    className = "button",
    type = "submit",
    children,
    onClick,
    ...rest
  } = props

  return (
    <button className={className} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
