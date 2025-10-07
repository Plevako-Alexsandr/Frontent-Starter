import "./Navigation.scss"
import clsx from "clsx"

export default (props) => {

  const { className, condition} = props


  const navLinks = [
    { label: 'Калькулятор', href: '#hero' },
    { label: 'О нас', href: '#advantages' },
    { label: 'Гарантии', href: '#guarantees' },
    { label: 'Отзывы', href: '#feedback' },
  ]

  return (
    <nav className={clsx("navigation", `${className}`, {
      "visible-tablet" : condition === "visible-tablet",
      "hidden-tablet" : condition === "hidden-tablet"
    })}>
      <ul className={clsx("navigation__list", `${className}-list`)}>
        {navLinks.map((link, index) => {

          const { label, href } = link

          return (
            <li
              className={clsx("navigation__item", `${className}-item`)}
              key={index}
            >
              <a
                className={clsx("navigation__link", `${className}-link`)}
                href={href}
                title={label}
              >
                <span className="visually-hidden">{label}</span>
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}


