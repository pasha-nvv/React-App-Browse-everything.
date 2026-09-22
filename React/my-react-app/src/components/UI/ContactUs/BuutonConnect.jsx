import arrow from '../../../assets/icons/Arrow.png'
import '../../../App.css'

const ButtonConnect = () => {
    return (
      <button className="btn__connect">Learn More
        <img className="img__btn__header" src={arrow} alt="Arrow"/>
      </button>
    )
  }

export default ButtonConnect;