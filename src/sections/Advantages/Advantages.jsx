import "./Advantages.scss"
import { Image } from "minista";


export default () => {


  const advantages = [
    {
      title: 'Растоможка груза',
      description: 'Мы берём на себя все формальности и бумажную волокиту, связанную с растаможкой груза',
      imagePath: '/src/assets/images/advantages/1.png'

    },
    {
      title: 'Надёжная упаковка',
      description: 'Все товары упаковываются нашими специалистами с особым вниманием к деталям, гарантируют, что они дойдут в безопасности и отличном состоянии',
      imagePath: '/src/assets/images/advantages/2.png'
    },
    {
      title: 'Быстро и выгодно',
      description: 'Мы предлагаем быструю и выгодную доставку, чтобы вы могли наслаждаться покупками как можно скорее',
      imagePath: '/src/assets/images/advantages/3.png'
    },
    {
      title: 'Удобный сервис',
      description: 'Стремимся сделать процесс доставки максимально удобным для вас, чтобы опыт остался приятным и безотказным',
      imagePath: '/src/assets/images/advantages/4.png'
    },
    {
      title: 'Прозрачность работы',
      description: 'Мы предоставляем полный контроль над каждым этапом доставки, от момента заказа до момента прибытия заказа',
      imagePath: '/src/assets/images/advantages/5.png'
    },
    {
      title: 'Страхование груза',
      description: 'Наше страхование обеспечивает полную защиту и покрытие почти все неприятные и неожиданные ситуации',
      imagePath: '/src/assets/images/advantages/6.png'
    },
  ];


  return (
    <section className="advantages" id="advantages">
      <div className="advantages__wrapper container">
        <header className="advantages__header">
          <h2 className="advantages__heading">Наши преимущества</h2>
        </header>
        <div className="advantages__body">
          <ul className="advantages__list">
            {advantages.map((advantage, index) => {

              const { imagePath, title, description } = advantage

              return (
                <li className="advantages__item" key={index}>
                  <Image src={imagePath} />

                  <div className="advantages__item-container">
                    <h3 className="advantages__item-heading">{title}</h3>
                    <p className="advantages__item-description">{description}</p>
                  </div>
                </li>
              )
            })}



          </ul>
        </div>
      </div>
    </section>
  )
}

