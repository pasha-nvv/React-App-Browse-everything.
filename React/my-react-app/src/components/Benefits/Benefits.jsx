import "../../App.css"
import BenefitsTitle from "./BenefitsTitle";
import BenefitsDes from "./BenefitsDes";
import BlockBenefitsFirst from "./BlockBenefitsFirst";
import BlockBenefitsTwo from "./BLockBenefitsTwo";
import BlockBenefitsThere from "./BlockBenefitsThere";
import BlockBenefitsFour from "./BlockBenefitsFour";

const Benefits = () => {
  return (
    <section id="benefits" className="benefits__block">
      <h2 className="h2__benefits">Benefits</h2>
      <BenefitsTitle></BenefitsTitle>
      <BenefitsDes></BenefitsDes>
      <div className="blocks__benefits">
        <BlockBenefitsFirst></BlockBenefitsFirst>
        <BlockBenefitsTwo></BlockBenefitsTwo>
        <BlockBenefitsThere></BlockBenefitsThere>
        <BlockBenefitsFour></BlockBenefitsFour>
      </div>
    </section>
  )
}

export default Benefits;