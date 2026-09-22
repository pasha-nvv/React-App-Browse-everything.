import "../../../App.css"
import SpecTitle from "././SpecTitle";
import SpecDesc from "././SpecDesc";
import SpecText from "././SpecText";
import ButtonPicture from "../Button/ButtonPicture";

const Specification = () => {
  return (
    <section id="specifications" className="specification">
      <SpecTitle />
      <SpecDesc />
      <SpecText />
      <ButtonPicture />
    </section>
  )
}

export default Specification;