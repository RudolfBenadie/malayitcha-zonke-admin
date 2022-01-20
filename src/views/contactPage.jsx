import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => {
  return (
    <div className='panel-without-sidebar'>
      <div id="contact-wrapper">
        <p>Do you need more information or want to encourage or complain?</p>
        <div id="contact-container">
          <ul>
            <li>
              <a target='_blank' rel="noreferrer" href='https://www.facebook.com/Comyn-Transport-105358955070172/'>
                <FontAwesomeIcon id="contact-facebook-icon" icon={["fab", "facebook-square"]} className="fa-lg" /><span>{' '}Facebook</span>
              </a>
            </li>
            <li>
              <a target='_blank' rel="noreferrer" href='https://api.whatsapp.com/send?phone=27824463747&app=facebook&entry_point=page_cta&fbclid=IwAR1kUPYoyOZQw5-gM1eCqTY8QZDE656snSntbQy6IoBwP57m3CHgHpcOHnY'>
                <FontAwesomeIcon id="contact-whatsapp-icon" icon={["fab", "whatsapp-square"]} className="fa-lg" /><span>{' '}Whatsapp</span>
              </a>
            </li>
            <li>
              <a href='mailto:comynvervoer@outlook.com'>
                <FontAwesomeIcon id="contact-email-icon" icon={["fas", "envelope"]} className="fa-lg" /><span>{' '}Email: comynvervoer@outlook.com</span>
              </a>
            </li>
            <li>
              <FontAwesomeIcon id="contact-email-icon" icon={["fas", "phone"]} className="fa-lg" /><span>{' '}Phone: +27 82 446 3747</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
