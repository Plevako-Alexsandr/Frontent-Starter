
import "./Field.scss"



export default (props) => {

  const {
    id,
    name,
    placeholder,
    type = "text",
    required = "required",
  } = props

  return (
    <div className="field">
      <label
        className="field__label visually-hidden"
        htmlFor={id}
      >
      </label>
      <input
        className="field__input"
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  )
}




