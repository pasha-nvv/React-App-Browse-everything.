import "../../App.css"

const SectionMap = ({number, subtitle, info}) => {
  return (
    <div className="block__item">
            <p className="p__how__main">{number}</p>
            <p className="p__how__subtitle">{subtitle}</p>
            <p className="p__how__info">{info}</p>
          </div>
  )
}

export default SectionMap;