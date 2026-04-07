import "../../App.css"
import Chart__icon from "../../assets/icons/Chart icon.png"

const BlockBenefitsFour = () => {
  return (
    <section className="block__benefits__inf">
        <img src={Chart__icon} alt="Chart icon"/>
        <p>Visualize Growth</p>
        <p className="p__benefits__info">
          Generate precise, visually
          compelling reports
          that illustrate your growth
          trajectories across all regions.
        </p>
      </section>
  )
}

export default BlockBenefitsFour;
