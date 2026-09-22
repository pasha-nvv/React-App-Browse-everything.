import "../../../App.css"
import BigTitle from "./BigTitle";
import PictureDes from "./PictureDes";
import ButtonPicture from "../Button/ButtonPicture";
import OvalImage from "./OvalImage";
import BigSectionBlocks from "./BigSectionBlocks";


const BigPicture = () => {
  return (
    <section className="blocks__big__picture">
      <div className="block__info__picture">
        <BigTitle />
        <PictureDes />
        <BigSectionBlocks />
        <ButtonPicture />
      </div>
      <OvalImage />
    </section>
  )
}

export default BigPicture;