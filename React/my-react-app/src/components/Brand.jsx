import "../App.css"
import logo__brand__one from "../assets/logo-brand/Logo first.png"
import logo__brand__two from "../assets/logo-brand/Logo two.png"
import logo__brand__there from "../assets/logo-brand/Logo there.png"
import logo__brand__four from "../assets/logo-brand/Logo four.png"
import logo__brand__five from "../assets/logo-brand/Logo five.png"
import logo__brand__six from "../assets/logo-brand/Logo six.png"

const Brand = () => {
  return (
    <div className="block__brand">
      <h3 className="h3__brand">Trusted by:</h3>
      <div className="images__brands">
        <img src={logo__brand__one} alt="Brand logotype"/>
        <img src={logo__brand__two} alt="Logoipsum logo"/>
        <img src={logo__brand__there} alt="Brand logotype"/>
        <img src={logo__brand__four} alt="Logoipsum logo"/>
        <img src={logo__brand__five} alt="Logoipsum logo"/>
        <img src={logo__brand__six} alt="Logoipsum logo"/>
      </div>
    </div>
  )
}

export default Brand;