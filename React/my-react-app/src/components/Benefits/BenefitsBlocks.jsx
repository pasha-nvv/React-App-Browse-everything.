import "../../App.css"
import BenefitsProps from './BenefitsProps';
import Cable__icon from "../../assets/icons/Cable icon.png"
import Earth__icon from "../../assets/icons/Earth icon.png"
import Vector__icon from "../../assets/icons/Vector.png"
import Chart__icon from "../../assets/icons/Chart icon.png"

const BenefitsBlocks = () => {
  return (
    <>
      <BenefitsProps 
      img = {Cable__icon}
      title = 'Amplify insights'
      info = 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.' />

      <BenefitsProps 
      img = {Earth__icon}
      title = 'Control Your Global Presence'
      info = 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.' />

      <BenefitsProps 
      img = {Vector__icon}
      title = 'Remove Language Barriers'
      info = 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.' />

      <BenefitsProps 
      img = {Chart__icon}
      title = 'Visualize Growth'
      info = 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.' />
    </>
      
  )
}

export default BenefitsBlocks;