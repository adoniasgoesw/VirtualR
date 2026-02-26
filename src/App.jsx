import NavBar from "./sections/NavBar"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import WorkFlow from "./sections/WorkFlow"
import Pricing from "./sections/Pricing"
import Testimonials from "./sections/Testimonials"
import Footer from "./sections/Footer"

export default function App() {
  return (

    <>
    <NavBar/>
    <div className="max-x-7xl mx-auto pt-20 px-6">

    <Hero/>
    <Features />
    <WorkFlow />
    <Pricing />
    <Testimonials />
    <Footer/>
    </div>

    
    
    
    </>
    
  )
}