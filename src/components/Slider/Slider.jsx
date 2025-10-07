
import clsx from "clsx"
import SliderButton from "@/components/SliderButton";

export default (props) => {

  const { sectionClassName } = props

  const reviews = [
    {
      text: 'Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких-либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным',
      author: 'Анна',
    },
    {
      text: 'Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких-либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным',
      author: 'Анна',
    },
    {
      text: 'Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких-либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным',
      author: 'Анна',
    },
    {
      text: 'Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких-либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным',
      author: 'Анна',
    },
    {
      text: 'Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких-либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным',
      author: 'Анна',
    },

  ];

  return (

    <>
      <SliderButton orientation="left" />
      <div
        className={clsx("swiper", `${sectionClassName}__slider`)}
        data-js-slider={JSON.stringify({
          "spaceBetween": 24,
          "loop": true,
          "threshold": 10,
          "speed": 600,
          "allowTouchMove": false,
          "mousewheel": false,
          "breakpoints": {
            1024: {
              "slidesPerView": 2,
            },
            768: {
              "slidesPerView": 1,
            },
          }

        })}
      >
        <ul className={clsx("swiper-wrapper", `${sectionClassName}__list`)}>
          {reviews.map((review, index) => {

            const { text, author } = review;

            const itemClassName = `${sectionClassName}__item`

            return (
              <li className={clsx("swiper-slide", `${itemClassName}`)} key={index}>

                <div className={`${itemClassName}-wrapper`}>
                  <header className={`${itemClassName}-header`}>
                    <blockquote className={`${itemClassName}-quote`}>{text}</blockquote>
                  </header>
                  <footer className={`${itemClassName}-footer`}>
                    <cite className={`${itemClassName}-cite`}>{author}</cite>
                  </footer>
                </div>
              </li>
            )

          })}
        </ul>
      </div>
      <SliderButton orientation="right" />
    </>

  )
}


