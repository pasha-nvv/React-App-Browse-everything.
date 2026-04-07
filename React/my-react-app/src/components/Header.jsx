import Navigation from './Navigation'
import Logo from './Logo'
import Burger from './Burger'
import Button from './Button/Button'
import '../App.css'


const Header = () => {
    return (
    <header className="header">
    <div className="header__top">
      <Logo />
      <Burger />
      <Navigation />
      <Button />
    </div>
  </header>
    )
  }


export default Header;