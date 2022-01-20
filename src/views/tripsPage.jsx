import { useEffect } from "react";

const TripsPage = () => {

  useEffect(() => {
    const footer = document.getElementById('footer-container');
    footer.classList.remove('hidden');
  })

  return (
    <div className='panel-without-sidebar'>
      <h3>Trips</h3>
    </div>
  );
};

export default TripsPage;
