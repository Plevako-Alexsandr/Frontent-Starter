import "./guarantees.scss"
import { Image } from "minista";
import Button from "@/components/Button";


export default () => {

  const documents = [
    {
      imagePath: '/src/assets/images/guarantees/1.png',
      title: 'Свидетельство о регистрации в РФ',
    },
    {
      imagePath: '/src/assets/images/guarantees/2.png',
      title: 'Свидетельство о регистрации в США',
    },
    {
      imagePath: '/src/assets/images/guarantees/3.png',
      title: (
        <>
          Свидетельство о регистрации в {<br />} Китае
        </>
      )
    },
    {
      imagePath: '/src/assets/images/guarantees/4.png',
      title: (
        <>
          Свидетельство о регистрации в <br /> Великобритании
        </>
      )
    },
  ];

  return (
    <section className="guarantees" id="guarantees">
      <div className="guarantees__wrapper container">
        <header className="guarantees__header">
          <h2 className="guarantees__heading">Гарантии качества</h2>
          <p className="guarantees__description">Наши гарантии качества включают в себя полный спектр документов, необходимых для ввоза и вывоза товаров, а также для успешного бизнеса на мировом рынке.
            Мы предоставляем вам надёжность и уверенность</p>
        </header>
        <div className="guarantees__body">
          <ul className="guarantees__list">
            {documents.map((document, index) => {

              const { imagePath, title } = document

              return (
                <li className="guarantees__item" key={index}>
                  <article className="guarantees__document">
                    <Image src={imagePath} />
                    <h3 className="guarantees__document-title">{title}</h3>
                  </article>
                </li>
              )
            })}
          </ul>
          <Button className="guarantees__button">Показать больше документов</Button>
        </div>
      </div>
    </section>
  )
}

