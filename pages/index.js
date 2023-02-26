import MainHeader from "@/components/Header/MainHeader";
import MainHero from "@/components/Hero/MainHero";
import About from "@/components/About/About";
import Timeline from "@/components/Timeline/Timeline";
import Events from "@/components/Events/Events";
import Contact from "@/components/Contact/Contact";
import Map from "@/components/Map/Map";
import Footer from "@/components/Footer/Footer";
import Team from "@/components/Team/Team";
import Footer1 from "@/components/Footer/Footer";
export default function Home() {
  return (
    <>
      <MainHeader />
      <MainHero />
      <About />  
      <Events />
      <Timeline />
      <Team/>
      <Contact />
      <Map />
      <Footer1/>
      {/* <Stalls /> */}
    </>
  )
}