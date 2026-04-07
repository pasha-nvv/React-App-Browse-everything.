import "../../App.css"
import Round__stones from "../../assets/big-images/round stones.png"

const ImgStones = () => {
  return (
      <div className="block__image__big">
        <img className="img__stones" src={Round__stones} alt="round stones" />
      </div>
  )
}

export default ImgStones;