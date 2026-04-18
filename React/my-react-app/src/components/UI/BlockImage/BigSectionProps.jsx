import "../../../App.css"

const BigSectionProps = ({number, info}) => {
  return (
      <section className="section__info__picture">
            <p className="p__number__picture">{number}</p>
            <p className="p__info__picture">{info}</p>
      </section>
  )
}

export default BigSectionProps;