import "../../App.css"
import Earth__icon from "../../assets/icons/Earth icon.png"

const BlockBenefitsTwo = () => {
  return (
      <section className="block__benefits__inf">
              <img src={Earth__icon} alt="Earth icon"/>
              <p>Control Your Global Presence</p>
              <p className="p__benefits__info">
                Manage and track satellite offices,
                ensuring consistent performance
                and streamlined operations everywhere.
              </p>
        </section>
  )
}

export default BlockBenefitsTwo;