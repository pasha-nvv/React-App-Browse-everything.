import "../../App.css"
import MapTitle from "./MapTitle";
import SectionMapFirst from "./SectionMapFirst";
import SectionMapTwo from "./SectionMapTwo";
import SectionMapThere from "./SectionMapThere";

const Map = () => {
  return (
      <section id="how-to" className="block__map">
        <MapTitle/>
        <div className="item__how__to">
        <SectionMapFirst/>
        <SectionMapTwo/>
        <SectionMapThere/>
        </div>
      </section>
  )
}

export default Map;