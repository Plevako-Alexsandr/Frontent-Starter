import "./SliderButton.scss"
import clsx from "clsx"

export default (props) => {

  const {orientation} = props

  console.log(orientation);
  

  return (
    <div className={clsx("slider__button", {
      "slider__button--left" : orientation === "left",
      "slider__button--right" : orientation === "right"
    })}></div>
  )

}














