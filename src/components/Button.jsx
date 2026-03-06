function Button(props) {
  const { className = "", type = "button", children } = props

  /* children - ребенок, то что мы передаем внутри тега <></> */
  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  )
}

export default Button
