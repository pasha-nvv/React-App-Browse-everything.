import "../../../App.css"
import MapTitle from "./MapTitle";
import SectionMapBlocks from "./SectionMapBlocks";


const Map = () => {
  return (
      <section id="how-to" className="block__map">
        <MapTitle/>
        <div className="item__how__to">
        <SectionMapBlocks/>
        </div>
      </section>
  )
}

export default Map;