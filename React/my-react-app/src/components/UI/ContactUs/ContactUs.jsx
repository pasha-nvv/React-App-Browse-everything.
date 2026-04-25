import "../../../App.css"
import ContactTitle from './ContactTitle';
import ContactDec from './ContactDec';
import ButtonConnect from './BuutonConnect';

const ContactUs = () => {
  return (
    <section id="contact-us" className="connect__with__us">
      <div className="block__connect">
        <ContactTitle />
        <ContactDec />
        <ButtonConnect />
      </div>
    </section>
  )
}

export default ContactUs;