const RouterLink = (props) => {
  const { children, to, className } = props

  const handleClick = (e) => {
    e.preventDefault()
    history.pushState({}, "", to)
    dispatchEvent(new PopStateEvent("popstate"))
  }

  return (
    <a className={className} onClick={handleClick} href={to}>
      {children}
    </a>
  )
}

export default RouterLink
