

import "./BurgerButton.scss"
import clsx from "clsx"


export default (props) => {
  const { className, extraAttrs} = props

  const title = "Open menu"

  return (
    <>
      <button
        className={clsx(className, 'burgerButton', "visible-mobile")}
        title={title}
        aria-label={title}
        {...extraAttrs}
      >
        <span className="visually-hidden">{title}</span>
      </button>
    </>
  )

}








