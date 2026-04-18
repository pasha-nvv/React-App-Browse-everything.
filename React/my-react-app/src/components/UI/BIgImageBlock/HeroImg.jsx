import "../../../App.css"
import Hero from "../../../assets/big-images/Hero Image.png"

const HeroImg = () => {
  return (
      <div className="image__container">
        <img className="img__hero" src={Hero} alt="Hero images" />
      </div>
    )
  }

export default HeroImg;