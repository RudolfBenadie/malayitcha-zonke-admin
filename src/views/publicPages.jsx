import { Outlet } from "react-router-dom";

const PublicPages = () => {
  return (
    <div id='public-pages-container'>
      <Outlet />
    </div>
  )
}

export default PublicPages;
