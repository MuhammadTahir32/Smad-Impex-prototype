import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Categories from '../components/sections/Categories'
import Marquee from '../components/sections/Marquee'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <Marquee />
    </>
  )
}

