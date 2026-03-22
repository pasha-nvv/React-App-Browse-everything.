import '../App.css'
import footer__icon from "../assets/icons/footer.png"

const Footer = () => {
    return (
    <footer className="footer">
    <nav className="nav__footer">
      <a className="footer__link" href="#benefits">Benefits</a>
      <a className="footer__link" href="#specifications">Specifications</a>
      <a className="footer__link" href="#how-to">How-to</a>
    </nav>
    <div className="block__footer">
      <div className="footer__item">
        <img className="img__footer" src={footer__icon} alt="man made of rectangles image"/>
        <p className="p__footer">© Area. 2025</p>
      </div>
      <div className="footer__text__info">
        <p className="p__footer">All Rights Reserved</p>
      </div>
    </div>
  </footer>
    )
  }


export default Footer;