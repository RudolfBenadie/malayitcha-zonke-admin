import { Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <footer id="footer-container">
      <div className='footer-section'></div>
      <div id="footer-support" className='footer-section'>
        <h5>Support</h5>
        <Nav vertical>
          <NavItem>
            <NavLink href='/help'>Help</NavLink>
          </NavItem>
        </Nav>
      </div>
      <div id="footer-company" className='footer-section'>
        <h5>Company</h5>
        <Nav vertical>
          <NavItem>
            <NavLink href='/contact'>Contact us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/about'>About us</NavLink>
          </NavItem>
        </Nav>
      </div>
      <div id="footer-legal" className='footer-section'>
        <h5>Legal</h5>
      </div>
      <div className='footer-section'></div>
    </footer>
  )
}

export default Footer;
