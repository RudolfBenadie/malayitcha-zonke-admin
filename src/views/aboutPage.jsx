import { useEffect } from "react";

const AboutPage = () => {

  useEffect(() => {
    const footer = document.getElementById('footer-container');
    footer.classList.remove('hidden');
  })

  return (
    <div className='panel-without-sidebar'>
      <h3>About</h3>
    </div>
  );
};

export default AboutPage;
