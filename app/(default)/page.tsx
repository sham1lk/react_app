export const metadata = {
  title: 'AiRadiology',
  description: 'AiRadiology - info',
}

import Hero from '../../components/hero'
import Zigzag from "@/components/zigzag";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
        <Hero />
        <Zigzag />
        <Contact />
    </>
  )
}
