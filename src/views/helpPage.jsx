import { useEffect } from "react";

const HelpPage = () => {

  useEffect(() => {
    const footer = document.getElementById('footer-container');
    footer.classList.remove('hidden');
  })

  return (
    <div className='panel-without-sidebar'>
      <h3>Help</h3>
    </div>
  );
};

export default HelpPage;
