import "./Header.scss"
import Logo from "@/components/Logo"
import Button from "@/components/Button"
import BurgerButton from "@/components/BurgerButton"
import Navigation from "@/components/Navigation"
import Contacts from "@/components/Contacts"

export default () => {

  return (
    <>
      <header
        className="header"
        data-js-header=""
      >
        <div className="header__wrapper container">
          <div className="header__head">
            <Logo
              className="header__logo"
              loading="eager"
              theme="dark"
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
              <Contacts
                className="header__contacts"
              />
              <BurgerButton
                className="header__burgerButton"
                extraAttrs={{ 'data-js-mobile-menu-burger-button': "" }}
              />
            </div>
          </div>

          <div className="header__menu hidden-mobile" data-js-mobile-menu="">
            <div className="header__menu-wrapper">
              <Navigation sectionName="header" />
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
