import { useEffect } from "react";

const ContactPage = () => {

  useEffect(() => {
    const footer = document.getElementById('footer-container');
    footer.classList.remove('hidden');
  })

  return (
    <div className='panel-without-sidebar'>
      <h3>Contact</h3>
    </div>
  );
};

export default ContactPage;
