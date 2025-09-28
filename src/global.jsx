import { Head } from "minista"
import Header from "./layouts/Header"
import Content from "./layouts/Content";
import Footer from "./layouts/Footer"

export default () => {

  return (
    <>
      <Head>
        <title>FromBoard-Delivery | Home</title>
      </Head>

      <Header />
      <Content />
      <Footer />
    </>
  )
}
