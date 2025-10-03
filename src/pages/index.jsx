import Hero from "@/sections/Hero"
import Advantages from "@/sections/Advantages"
import Guarantees from "@/sections/Guarantees"



export const metadata = {
  title: 'Home',
}


export default () => {
  return (
    <>
      <Hero />
      <Advantages />
      <Guarantees />
    </>
  )
}
