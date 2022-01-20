import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import image1 from '../assets/images/mak-BG0wHiGvfvY-unsplash.jpg';
import image2 from '../assets/images/bruno-van-der-kraan-vm5gksHUQJw-unsplash.jpg';
import image3 from '../assets/images/abdul-rohmad-zm0l_w1tyug-unsplash.jpg';

const HomePage = () => {
  const parallax = useRef(null)
  return (
    <div id='home-page'>
      <Parallax id='parallax-container' ref={parallax} pages={4} style={{ top: '0', left: '0' }} innerStyle={{ height: 'max-content' }} >
        <ParallaxLayer
          id='parallax-layer-0'
          className='parallax-layer'
          offset={0}
          speed={0}
          onClick={() => parallax?.current?.scrollTo(1)}
        >
          <p><span class='bold-heading'>MZ - your partner in transport</span></p>
        </ParallaxLayer>

        <ParallaxLayer
          id='parallax-layer-1'
          className='parallax-layer'
          offset={1}
          speed={0}
          factor={1.1}
          onClick={() => parallax?.current?.scrollTo(2)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            backgroundColor: 'cornflowerblue',
          }}>
          <p>Scroll up</p>
        </ParallaxLayer>

        <ParallaxLayer
          id='parallax-layer-2'
          className='parallax-layer'
          offset={2}
          speed={1}
          factor={0.5}
          onClick={() => parallax?.current?.scrollTo(3)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <img src={image2} alt='Truck driving in a valley' style={{ top: '-250px' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          id='parallax-layer-4'
          className='parallax-layer'
          offset={2.5}
          speed={-0.5}
          onClick={() => parallax?.current?.scrollTo(3)}
          style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 0 }}
        >
          <p><span class='bold-heading'>Let's get you moving!</span></p>
        </ParallaxLayer>

        <ParallaxLayer
          id='parallax-layer-3'
          className='parallax-layer'
          offset={3}
          speed={0}
          onClick={() => parallax?.current?.scrollTo(0)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            backgroundColor: 'greenyellow'
          }}>
          <p>Scroll up</p>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default HomePage;
