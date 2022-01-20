import { Parallax } from "react-parallax";

import image1 from '../assets/images/mak-BG0wHiGvfvY-unsplash.jpg';
import image2 from '../assets/images/bruno-van-der-kraan-vm5gksHUQJw-unsplash.jpg';
import image3 from '../assets/images/abdul-rohmad-zm0l_w1tyug-unsplash.jpg';
import { useEffect } from "react";

const HomePage = () => {

  useEffect(() => {
    const footer = document.getElementById('footer-container');
    footer.classList.remove('hidden');
  })

  return (
    <div className="panel-full-width">
      <Parallax bgImageStyle={{ bottom: -10 }} bgImage={image1} strength={500} >
        <div className="parallax-content">
          <div className="parallax-container text-glow">Moving anything, anywhere</div>
        </div>
      </Parallax>
      <Parallax
        renderLayer={percentage => (
          <div
            style={{
              position: 'absolute',
              background: `rgba(45, 255, 125, ${percentage * 1})`,
              left: '0%',
              top: '0%',
              width: '100%',
              height: '100%',
            }}
          />
        )} >
        <div id="home-summary" className="parallax-content">
          <h1>Malayicha Zonke!</h1>
          <p style={{ padding: 50, fontSize: 20, fontStyle: "bold" }}>
            Do you have stuff to move, or have a vehicle for moving stuff, but have no idea where to start looking?  We connect local owner transporters to people in need of transport to move anything, anywhere.
            Find and reserve trips that are available online.  If you are a transport provider, speak to us to set up a provider account and list your vehicle as available to move cargo.
          </p>
        </div>
      </Parallax >
      <Parallax bgImage={image2} strength={500} bgImageStyle={{ bottom: -100 }}>
        <div className="parallax-content">
          <div className="parallax-container text-glow">Let's make a move</div>
        </div>
      </Parallax>
      <Parallax
        bgImage={image3}
        strength={-300}
        // bgImageStyle={{ bottom: -100 }}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(0, 125, 255, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            />
          </div>
        )}
      >
        <div className="parallax-content">
          <div className="parallax-container">Try it right now!</div>
        </div>
      </Parallax>
      {/* <Parallax
        className="footer"
        renderLayer={percentage => (
          <div
            style={{
              position: 'absolute',
              background: `rgba(0, 0, 0, ${percentage * 3})`,
              left: '0%',
              top: '0%',
              width: '100%',
              height: '100%',
            }}
          />
        )} >
        <div className="parallax-content pad20">
          <Nav></Nav>
        </div>
      </Parallax> */}
    </div >
  );
};

export default HomePage;
