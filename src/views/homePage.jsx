import React from 'react'

import getStartedImage from '../assets/images/get-started.jpg';
import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {
  return (
    <div id='home-page'>
      <div
        id='top-panel'
      >
        <div id='catch-phrase'><span>The easiest way to find transport</span></div>
        <div id='summary'><span>Malayicha gives you access to plenty of vehicles to fulfill your transportation requirements</span></div>
        <div id='quick-search-wrapper'>
          <div id='quick-search'>
          </div>
        </div>
      </div>
      <div id='bottom-wrapper'>
        <div id='bottom-panel'>
          <Row id='advantages-panel'>
            <Col>
              <Row>
                <FontAwesomeIcon icon='money-bill-wave' className='advantages-icons' />
                <h4>
                  Competitive rates
                </h4>
                <span>
                  Malayicha offers competive rates on transportation of private and commercial loads.
                </span>
              </Row>
              <Row>
                <FontAwesomeIcon icon='truck' className='advantages-icons' />
                <h4>
                  Extensive fleet
                </h4>
                <span>
                  Sourcing vehicles from owner-drivers and commercial fleets, Malayicha has vehicles that can cater for any load from any destination to where it is needed.
                </span>
              </Row>
              <Row>
                <FontAwesomeIcon icon='umbrella' className='advantages-icons' />
                <h4>
                  Insurance
                </h4>
                <span>
                  We offer extensive insurance on loads either through Malayicha's insurers or the vehicle owners' cover.
                </span>
              </Row>
              <Row>
                <FontAwesomeIcon icon='wrench' className='advantages-icons' />
                <h4>
                  Roadside assist
                </h4>
                <span>
                  We partner with a network of service providers that can assist our truck owners with breakdowns and other incidents.  It is our priority to have your load delivered at its destination.
                </span>
              </Row>
            </Col>
            <Col id='get-started'>
              <img src={getStartedImage} alt='Delivery truck with driver unloading parcels' />
              <Button id='get-started-button'>Get started</Button>
            </Col>
          </Row>
          <Row style={{ height: 200 }}></Row>
        </div>
      </div>
    </div >
  )
}

export default HomePage;
