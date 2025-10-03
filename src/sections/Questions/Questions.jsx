import "./questions.scss"
import Field from '@/components/Field'
import Button from "@/components/Button"

export default () => {


  return (
    <section className="questions" id="questions">
      <div className="questions__wrapper container">
        <header className="questions__header">
          <h2 className="questions__heading">Остались вопросы?</h2>
        </header>
        <div className="questions__body">
          <form className="questions__form">
            <div className="questions__form-field">
              <Field
                id="name"
                name="name"
                placeholder="Имя"
              />
              <Field
                id="phone"
                name="phone"
                placeholder="Телефон"
                type="tel"
              />
            </div>
            <div className="questions__form-field">
              <Field
                id="email"
                name="email"
                placeholder="Почта"
                type="email"
              />
              <Field
                id="subject-question"
                name="subject-question"
                placeholder="Тема вопроса"
                type="subject-question"
              />
            </div>
            <div className="questions__form-field">
              <Field
                id="message"
                name="message"
                placeholder="Сообщение..."
                type="message"
                elementType="textarea"
              />
            </div>
          </form>
          <Button
            className="questions__button"
            type="submit"
          >
            Оставить заявку</Button>
        </div>
      </div>
    </section>
  )
}

