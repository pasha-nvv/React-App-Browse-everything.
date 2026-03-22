import burger from '../assets/icons/Vector.png'
import arrow from '../assets/icons/Arrow.png'
import '../App.css'

const Header = () => {
    return (
    <header className="header">
    <div className="header__top">
      <p className="p__header">Area</p>
      <img className="burger__icon" src={burger} alt="Burger icon"/>
      <nav className="nav__links__header">
        <a className="header__link" href="#benefits">Benefits</a>
        <a className="header__link" href="#specifications">Specifications</a>
        <a className="header__link" href="#how-to">How-to</a>
        <a className="header__link" href="#contact-us">Contact Us</a>
      </nav>
      <button className="btn__header">Learn More
        <img className="img__btn__header" src={arrow} alt="Arrow"/>
      </button>
    </div>
  </header>
    )
  }


export default Header;