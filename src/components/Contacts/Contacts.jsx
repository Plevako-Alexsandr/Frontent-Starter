import "./Contacts.scss"
import clsx from "clsx"

export default (props) => {

  const { className } = props


  return (
    <div className={clsx("contacts", className)}>
      <a
        className={clsx("contacts__phone", `${className}-phone`)}
        href="tel:+78001234567"
      >
        +7 (800) 123 45-67
      </a>
      <p className={clsx("contacts__title", "hidden-mobile",`${className}-title`)}>
        Звонки по России бесплатны
      </p>
    </div>
  )
}


