const RouterLink = (props) => {
  //to = роут
  const { to, children, ...rest } = props

  const handleClick = (e) => {
    e.preventDefault()

    //меняем url на переданный в пропах
    history.pushState({}, "", to)

    //вызываем ивент для смены роута, триггер для вызова
    window.dispatchEvent(new PopStateEvent("popstate"))
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default RouterLink
