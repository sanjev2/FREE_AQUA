import Navbar from "../app/components/NavBar"
import Hero from "../app/components/Hero"
import Services from "../app/components/Services"
import About from "../app/components/About"
import ComingSoon from "../app/components/CommingSoon"
import MarketingForm from "../app/components/MarketingForm"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ComingSoon />
      <MarketingForm />
      <Footer />
    </main>
  )
}
