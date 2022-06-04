import React, { useRef } from 'react'
import getStartedImage from '../assets/images/get-started.jpg';
import { Button, Col, Form, FormGroup, FormText, Input, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {
  const originRef = useRef();
  const sizeRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    alert('Not implemented yet.')
  };

  return (
    <div id='home-page'>
      <div
        id='top-panel'
      >
        <div id='catch-phrase'><span>The easiest way to find transport</span></div>
        <div id='summary'><span>Malayicha gives you access to plenty of vehicles to fulfill your transportation requirements</span></div>
        <div id='quick-search-wrapper'>
          <div id='quick-search'>
            <h5>Get started here:</h5>
            <Form id='search-form' onSubmit={handleSearch}>
              <FormGroup id='origin' >
                <Input
                  type='text'
                  innerRef={originRef}
                  className='search-control'
                  autoComplete='off'
                  placeholder='Depart from...'
                ></Input>
              </FormGroup>
              <FormGroup id='type'>
                <Input
                  type='select'
                  innerRef={sizeRef}
                  className='search-control'
                  autoComplete='off'
                  placeholder='Size'
                  defaultValue={null}
                >
                  <option>
                    Up to 1 ton
                  </option>
                  <option>
                    1-8 ton
                  </option>
                  <option>
                    8-16 ton
                  </option>
                  <option>
                    Over 16 ton
                  </option>
                </Input>
              </FormGroup>
              <FormGroup id="search-button" >
                <FormText>&nbsp;</FormText>
                <Button type='submit' className='w-100 search-control'>
                  <FontAwesomeIcon icon='search-location'></FontAwesomeIcon>
                  <span>GO</span>
                </Button>
              </FormGroup>
            </Form>
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
