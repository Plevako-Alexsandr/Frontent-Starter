import Slider from "@/components/Slider"
import "./Feedback.scss"

export default () => {


  return (
    <section className="feedback" id="feedback">
      <div className="feedback__wrapper container">
        <header className="feedback__header">
          <h2 className="feedback__heading">Отзывы</h2>
        </header>
        <div className="feedback__body">
          <Slider sectionClassName="feedback" />
        </div>
      </div>
    </section>
  )
}

