import "../../App.css"
import Vector__icon from "../../assets/icons/Vector.png"

const BlockBenefitsThere = () => {
  return (
      <section className="block__benefits__inf">
              <img src={Vector__icon} alt="Vector icon"/>
              <p>Remove Language Barriers</p>
              <p className="p__benefits__info">
                Adapt to diverse markets with
                built-in localization for
                clear communication and enhanced
                user experience.
              </p>
        </section>
  )
}

export default BlockBenefitsThere;