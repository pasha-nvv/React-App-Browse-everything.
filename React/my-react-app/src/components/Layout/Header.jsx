import Navigation from '../UI/Navigation'
import Logo from '../UI/Logo'
import Burger from '../UI/Burger'
import Button from '../UI/Button/Button'
import "../../App.css"

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