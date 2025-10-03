import './Hero.scss'
import { Image } from 'minista'
import Field from '@/components/Field'
import Button from '@/components/Button'


export default () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__wrapper container">
        <div className="hero__title">
          <header className="hero__title-header">
            <h1 className="hero__title-heading">
              Без проблемная доставка купленных вещей из США, Европы и Азии в Россию
            </h1>
            <p className="hero__title-description">
              Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис позволяет
              вам легко и удобно заказывать товары со всего мира и получать их в России
            </p>
          </header>
          <div className="hero__title-body">
            <Image src="/src/assets/images/hero-img.jpg" />
          </div>
        </div>

        <form className="hero__form">
          <header className="hero__form-header">
            <h2 className="hero__form-heading">Калькулятор доставки</h2>
            <p className="hero__form-description">Посчитайте, сколько будет стоить перевозка <br /> покупки из зарубежа</p>
          </header>

          <div className="hero__form-body">

            <div className="hero__form-field">
              <Field
                id="name"
                name="name"
                placeholder="Имя"
              />
            </div>

            <div className="hero__form-field">
              <Field
                id="email"
                name="email"
                placeholder="Почта"
                type="email"
              />

              <Field
                id="phone"
                name="phone"
                placeholder="Телефон"
                type="tel"
              />
            </div>

            <div className="hero__form-field">
              <Field
                id="total-area"
                name="total-area"
                placeholder="Общая площадь, м²"
              />

              <Field
                id="weight"
                name="weight"
                placeholder="Вес, кг"
              />
            </div>

            <div className="hero__form-field">

              <Field
                id="delivery-region"
                name="delivery-region"
                placeholder="Страна покупки"
              />
              <Field
                id="city-purchase"
                name="city-purchase"
                placeholder="Город покупки"
              />
            </div>

            <div className="hero__form-field">
              <Field
                id="delivery-area"
                name="delivery-area"
                placeholder="Область покупки"
              />

              <Field
                id="delivery-city"
                name="delivery-city"
                placeholder="Город доставки"
              />
            </div>

            <Button className="hero__form-button button" type="submit">Заказать расчёт</Button>
          </div>
        </form>

      </div>
    </section>
  )
}
