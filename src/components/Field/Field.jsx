
import "./Field.scss"



export default (props) => {

  const {
    id,
    name,
    placeholder,
    type = "text",
    required = "required",
    elementType = "input"
  } = props

  return (
    <div className="field">
      <label
        className="field__label visually-hidden"
        htmlFor={id}
      >
      </label>
      {elementType === "textarea" ? (
        <textarea
          className="field__textarea"
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          className="field__input"
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          required={required}
        />
      )}
    </div>
  )
}




