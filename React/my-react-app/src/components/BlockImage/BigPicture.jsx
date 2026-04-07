import "../../App.css"
import BigTitle from "./BigTitle";
import PictureDes from "./PictureDes";
import SectionFirst from "./SectionFirst";
import SectionTwo from "./SectionTwo";
import SectionThere from "./SectionThere"
import SecthionFour from "./SectionFour"
import ButtonPicture from "../Button/ButtonPicture";
import OvalImage from "./OvalImage";

const BigPicture = () => {
  return (
      <section className="blocks__big__picture">
        <div className="block__info__picture">
          <BigTitle/>
          <PictureDes/>
          <SectionFirst/>
          <SectionTwo/>
          <SectionThere/>
          <SecthionFour/>
          <ButtonPicture/>
          </div>
          <OvalImage/>
          </section>
  )
}

export default BigPicture;