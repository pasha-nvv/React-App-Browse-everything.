import "../App.css"

import Title from "./Title"
import Brand from "./Brand"
import Benefits from "./Benefits/Benefits"
import HeroImg from "./BIgImageBlock/HeroImg"
import BigPicture from "./BLockImage/BigPicture"
import Specification from "./Specifications/Specifications"
import Table from "./MainTable/Table"
import BigInfo from "./BlockBigInfo/BigInfo"
import Map from "./BlockMap/Map"
import MapHero from "./MountainsHero"
import ContactUs from "./ContactUs/ContactUs"

const Main = () => {
  return (
    <main className="main">
      <Title/>
      <Brand/>
      <Benefits/>
      <HeroImg/>
      <BigPicture/>
      <Specification/>
      <Table/>
      <BigInfo/>
      <Map/>
      <MapHero/>
      <ContactUs/>
    </main>
  )
}

export default Main;