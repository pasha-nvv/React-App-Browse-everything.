import "../../../App.css"

const BenefitsProps = ({ img, title, info }) => {
  return (
    <section className="block__benefits__inf">
      <img src={img} alt=""/>
      <p>{title}</p>
      <p className="p__benefits__info">{info}</p>
    </section>
  )
}

export default BenefitsProps;