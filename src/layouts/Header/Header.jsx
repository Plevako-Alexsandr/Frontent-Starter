import "./Header.scss"
import clsx from "clsx"
import Logo from "@/components/Logo"
import Button from "@/components/Button"
import BurgerButton from "@/components/BurgerButton"

export default () => {

  const navLinks = [
    { label: 'Калькулятор', href: '#hero' },
    { label: 'О нас', href: '#advantages' },
    { label: 'Гарантии', href: '#guarantees' },
    { label: 'Отзывы', href: '#feedback' },
  ]

  return (
    <>
      <header className="header" data-js-header="">
        <div className="header__wrapper container">
          <div className="header__head">
            <Logo
              className="header__logo"
              loading="eager"
            />

            <div className="header__info">
              <div className="header__about header__about--desktop hidden-tablet">
                <p className="header__about-description">
                  Доставляем товары из заграницы в Россию
                </p>
                <p className="header__about-description">
                  Стоимость от 550 рублей за заказ
                </p>
                <p className="header__about-currency currency">
                  1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽
                </p>
              </div>
              <div className="header__info-separator"></div>
              <div className="header__contacts">
                <a
                  className="header__contacts-phone"
                  href="tel:+78001234567"
                >
                  +7 (800) 123 45-67
                </a>
                <p className="header__contacts-title hidden-mobile">
                  Звонки по России бесплатны
                </p>

                <BurgerButton
                  className="header__burgerButton"
                  extraAttrs={{ 'data-js-mobile-menu-burger-button': "" }}
                />
              </div>
            </div>
          </div>

          <div className="header__menu hidden-mobile" data-js-mobile-menu="">
            <div className="header__menu-wrapper">
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {navLinks.map((link, index) => {

                    const { label, href } = link

                    return (
                      <li
                        className="header__nav-item"
                        key={index}
                      >
                        <a
                          className={clsx("header__nav-link")}
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

              <Button className="header__button">Оставить заявку</Button>
            </div>

            <div className="header__about header__about--tablet visible-tablet">
              <p className="header__about-description">Доставляем товары <br /> из заграницы в Россию</p>
              <p className="header__about-description">Стоимость от 550 рублей <br /> за заказ</p>
              <p className="header__about-currency currency" data-currency="currency">1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽</p>
            </div>

          </div>

        </div>

      </header>
    </>
  )
}
