export const Button = (props) => {
  const { className = "button", type = "submit", children } = props

  return (
    <button className={className} type={type}>
      {children}
    </button>
  )
}
