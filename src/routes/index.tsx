import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Categories from '../components/sections/Categories'
import Marquee from '../components/sections/Marquee'
import Products from '../components/sections/Products'
import Process from '../components/sections/Process'
import Testimonials from '../components/sections/Testimonials'
import Certifications from '../components/sections/Certifications'
import Newsletter from '../components/sections/Newsletter'

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
      <Products />
      <Process />
      <Testimonials />
      <Certifications />
      <Newsletter />
    </>
  )
}

