import { useEffect } from "react";

const AboutPage = () => {

  useEffect(() => {
    const footer = document.getElementById('footer-container');
    footer.classList.remove('hidden');
  })

  return (
    <div className='panel-without-sidebar'>
      <div id="about-wrapper">
        <p>We move everything! Malayicha zonke!</p>
      </div>
    </div>
  );
};

export default AboutPage;
