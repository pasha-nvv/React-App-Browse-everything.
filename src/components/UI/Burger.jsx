import { useState } from "react";
import burger from "../../assets/icons/Vector.png";
import "../../App.css";

const Burger = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        className="burger__icon"
        src={burger}
        alt="Burger icon"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div className={`mobile__menu ${isOpen ? 'active' : ''}`}>
        <buttn className="close__menu"
        onClick={() => setIsOpen(false)}
        >
          x
        </buttn>
          <p className="logo__mobile">Area</p>

          <a href="#benefits" className="link__mobile" onClick={() => setIsOpen(false)}>
            Benefits
          </a>

          <a href="#specifications" className="link__mobile" onClick={() => setIsOpen(false)}>
            Specifications
          </a>

          <a href="#how-to" className="link__mobile" onClick={() => setIsOpen(false)}>
            How-to
          </a>

          <a href="#contact-us" className="link__mobile" onClick={() => setIsOpen(false)}>
            Contact Us
          </a>
        </div>
    </>
  );
};

export default Burger;

