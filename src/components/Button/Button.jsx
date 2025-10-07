import "./Button.scss"
import clsx from "clsx"

export default (props) => {
  const { className, children, type = "button" } = props

  return (

    <button
      className={clsx('button', className)}
      type={type}
    >{children}</button>

  )

}














