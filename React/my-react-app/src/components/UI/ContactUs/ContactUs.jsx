import "../../../App.css"
import ContactTitle from './ContactTitle';
import ContactDec from './ContactDec';
import Button from '../Button/Button';

const ContactUs = () => {
  return (
    <section id="contact-us" className="connect__with__us">
      <div className="block__connect">
        <ContactTitle />
        <ContactDec />
        <Button />
      </div>
    </section>
  )
}

export default ContactUs;