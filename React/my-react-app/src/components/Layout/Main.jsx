import "../../App.css"
import Title from "../Title"
import Brand from "../UI/Brand"
import Benefits from "../UI/Benefits/Benefits"
import HeroImg from "../UI/BIgImageBlock/HeroImg"
import BigPicture from "../UI/BLockImage/BigPicture"
import Specification from "../Specifications/Specifications"
import Table from "../UI/MainTable/Table"
import BigInfo from "../UI/BlockBigInfo/BigInfo"
import Map from "../UI/BlockMap/Map"
import MapHero from "../UI/MountainsHero"
import ContactUs from "../UI/ContactUs/ContactUs"

const Main = () => {
  return (
    <main className="main">
      <Title />
      <Brand />
      <Benefits />
      <HeroImg />
      <BigPicture />
      <Specification />
      <Table />
      <BigInfo />
      <Map />
      <MapHero />
      <ContactUs />
    </main>
  )
}

export default Main;