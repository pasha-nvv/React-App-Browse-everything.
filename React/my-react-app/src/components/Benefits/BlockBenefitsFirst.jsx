import "../../App.css"
import Cable__icon from "../../assets/icons/Cable icon.png"

const BlockBenefitsFirst = () => {
  return (
      <section className="block__benefits__inf">
        <img src={Cable__icon} alt="Cable icon"/>
        <p>Amplify insights</p>
        <p className="p__benefits__info">Unlock data-driven decisions
          with comprehensive analytics,
          revealing key opportunities for strategic regional growth.
        </p>
      </section>
  )
}

export default BlockBenefitsFirst;