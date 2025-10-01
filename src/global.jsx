import "@/styles"
import { Head } from "minista"
import Header from "./layouts/Header"
import Content from "./layouts/Content"
import Footer from "./layouts/Footer"

export default (props) => {

  const { title } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>FromBoard-Delivery | {title } </title>
        <script src="/src/main.js" type="module"></script>
      </Head>

      <Header />
      <Content />
      <Footer />
    </>
  )
}
