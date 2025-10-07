import "./Logo.scss"
import clsx from "clsx"

export default (props) => {

  const { className, loading = "lazy", theme = "light" } = props

  const title = "Home"

  const logoPath = theme === "dark" ? "/public/icons/logo.svg" : "/public/icons/logo-light.svg"

  return (
    <a
      className={clsx("logo", className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__img"
        src={logoPath}
        loading={loading}
        alt=""
      />
    </a>
  )
}


