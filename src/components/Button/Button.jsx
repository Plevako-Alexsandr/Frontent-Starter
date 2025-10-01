import "./Button.scss"
import clsx from "clsx"

export default ( props ) => {
  const { className } = props

  return (
    <>
      <button className={clsx(className, 'button')}>Оставить заявку</button>
    </>
  )

}














