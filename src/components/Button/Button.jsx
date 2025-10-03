import "./Button.scss"
import clsx from "clsx"

export default (props) => {
  const { className, children, type = "text" } = props

  return (
    <>
      <button
        className={clsx('button', className)}
        type={type}
      >{children}</button>
    </>
  )

}














