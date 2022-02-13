import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';

const SiteFooter = () => {
  return (
    <footer id='footer-wrapper'>
      <div id='footer-toggle'>
        <div id='up-arrow'></div>
      </div>
      <div className='footer-section'></div>
      <div id="footer-support" className='footer-section'>
        <h5>Support</h5>
        <Nav vertical>
          <NavItem>
            <Link to='/help'>Help</Link>
          </NavItem>
        </Nav>
      </div>
      <div id="footer-company" className='footer-section'>
        <h5>Company</h5>
        <Nav vertical>
          <NavItem>
            <Link to='/contact'>Contact us</Link>
          </NavItem>
          <NavItem>
            <Link to='/about'>About us</Link>
          </NavItem>
        </Nav>
      </div>
      <div id="footer-legal" className='footer-section'>
        <h5>Legal</h5>
        <Nav vertical>
          <NavItem>
            <Link to='/terms'>Terms and conditions</Link>
          </NavItem>
        </Nav>
      </div>
      <div className='footer-section'></div>
    </footer>
  )
}

export default SiteFooter;
