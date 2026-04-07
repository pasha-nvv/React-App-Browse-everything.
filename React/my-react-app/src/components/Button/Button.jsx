import arrow from '../../assets/icons/Arrow.png'
import '../../App.css'

const Button = () => {
    return (
      <button className="btn__header">Learn More
        <img className="img__btn__header" src={arrow} alt="Arrow"/>
      </button>
    )
  }

export default Button;