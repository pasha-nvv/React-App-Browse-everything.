import "../../../App.css"
import BenefitsTitle from "./BenefitsTitle";
import BenefitsDes from "./BenefitsDes";
import BenefitsBlocks from "./BenefitsBlocks";

const Benefits = () => {
  return (
    <section id="benefits" className="benefits__block">
      <h2 className="h2__benefits">Benefits</h2>
      <BenefitsTitle></BenefitsTitle>
      <BenefitsDes></BenefitsDes>
      <div className="blocks__benefits">
        <BenefitsBlocks />
      </div>
    </section>
  )
}

export default Benefits;