import "./Button.scss"
import clsx from "clsx"

export default ( props ) => {
  const { className, children } = props

  return (
    <>
      <button className={clsx('button', className)}>{children}</button>
    </>
  )

}














