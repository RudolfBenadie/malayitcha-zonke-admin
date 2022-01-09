import { useEffect } from "react";

const HelpPage = () => {

  useEffect(() => {
    const footer = document.getElementById('footer-container');
    footer.classList.remove('hidden');
  })

  return (
    <div className='panel-without-sidebar'>
      <div id='help-wrapper'>
        <div>We will add some content here soon.</div>
      </div>
    </div>

  );
};

export default HelpPage;
