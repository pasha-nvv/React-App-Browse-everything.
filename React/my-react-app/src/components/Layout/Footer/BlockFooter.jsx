import '../../../App.css'
import ImgFooter from './ImgFooter';

const BlockFooter = () => {
    return (
    <div className="block__footer">
      <div className="footer__item">
        <ImgFooter/>
        <p className="p__footer">© Area. 2025</p>
      </div>
      <div className="footer__text__info">
        <p className="p__footer">All Rights Reserved</p>
      </div>
    </div>
    )
  }


export default BlockFooter;