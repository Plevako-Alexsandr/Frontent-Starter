
export default () => {

  const headerNavLinks = [
    {name: 'Калькулятор', href: '#hero'},
    {name: 'О нас', href: '#advantages'},
    {name: 'Гарантии', href: '##guarantees'},
    {name: 'Отзывы', href: '#feedback'},
  ]

  return (
    <>
      <h1>HEADER</h1>
      <nav>
        <ul>
          {headerNavLinks.map((link, index) => {
            const { name, href } = link

            return (
              <li key= { index }>
                <a href={href} className="header__link">{name}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
