import "../../App.css"
import mountains__green from "../../assets/big-images/mountains.png"

const MountainsHero = () => {
  return (
    <div className="image__container">
      <img className="img__map" src={mountains__green} alt="green mountains image" />
    </div>  
  )
}

export default MountainsHero;