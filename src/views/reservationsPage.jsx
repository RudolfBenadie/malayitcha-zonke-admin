import { useEffect } from "react";
import SideBar from "../layout/sideBar";

const ReservationsPage = () => {

  useEffect(() => {
    const footer = document.getElementById('footer-container');
    footer.classList.add('hidden');
  })

  return (
    <>
      <SideBar />
      <div className="panel-with-sidebar">
        <h3>Reservations</h3>
      </div>
    </>
  );
};

export default ReservationsPage;
