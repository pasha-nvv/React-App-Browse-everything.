import "../../App.css"
import Ipad from "../../assets/Ipad.png"
import iPhone from "../../assets/iPhone.png"

const Title = () => {
  return (
    <section className="block__first">
      <h1 className="h1__main">Browse <span className="span__main">everything.</span></h1>
      <div className="block__image">
        <img className="img__first__pad" src={Ipad} alt="creen Effciency Improvments ipad"/>
        <img className="img__first__mobile" src={iPhone} alt="Screen Effciency Improvments mobile"/>
      </div>
      <div className="green__block">
        <button className="btn__green"></button>
      </div>
    </section>
  )
}

export default Title;