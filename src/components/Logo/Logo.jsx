import "./Logo.scss"
import clsx from "clsx"

export default (props) => {

  const { className, loading = "lazy" } = props

  const title = "Home"

  return (
    <>
      <a
        className={clsx(className, "logo")}
        href="/"
        title={title}
        aria-label={title}
      >

        <img
          className="logo__img"
          src="/public/icons/logo.svg"
          alt=""
        />
      </a>
    </>
  )
}


