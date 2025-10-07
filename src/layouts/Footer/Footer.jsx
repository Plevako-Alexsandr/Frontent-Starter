import Contacts from "@/components/Contacts"
import "./Footer.scss"
import Logo from "@/components/Logo"
import Navigation from "@/components/Navigation"

export default () => {

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__head">
          <div className="footer__title">
            <Logo className="footer__logo" />
            <p className="footer__copyright">
              &copy; 2025 Ваша компания. Все права защищены.
            </p>
          </div>
          <Navigation className="footer__nav" />
          <Contacts className="footer__contacts" />
        </div>
        <div class="footer__body">
          <p class="footer__disclaimer">НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание на то, что цены носят информационный и ознакомительный характер, а значит ни в какой мере не являются публичной офертой, которая определена в ст. 437 ГК РФ. Вся информация на сайте может содержать неточности, орфографические и иные ошибки, она не является полной, окончательно и исчерпывающей</p>
          <p class="footer__creator">Разработкой макета занимался<br/>Плевако Александр | Что-то на IT'шном</p>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </footer>
  )
}



