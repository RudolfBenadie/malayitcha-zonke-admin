import { Parallax, Background } from "react-parallax";
import image1 from '../assets/images/mak-BG0wHiGvfvY-unsplash.jpg';
import image2 from '../assets/images/bruno-van-der-kraan-vm5gksHUQJw-unsplash.jpg';
import image3 from '../assets/images/abdul-rohmad-zm0l_w1tyug-unsplash.jpg';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: 'transparent',
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontStyle: "bold",
  fontSize: "2em"
};

const HomePage = () => {
  return (
    <div style={styles}>
      <h3>Home</h3>
      <Parallax bgImageStyle={{ bottom: -10 }} bgImage={image1} strength={500} >
        <div style={{ height: 800 }}>
          <div style={insideStyles}>Moving anything, anywhere</div>
        </div>
      </Parallax>
      <Parallax
        renderLayer={percentage => (
          <div
            style={{
              position: 'absolute',
              background: `rgba(255, 125, 0, ${percentage * 0.5})`,
              left: '0%',
              top: '0%',
              width: '100%',
              height: '100%',
            }}
          />
        )}      >
        <div style={{ height: 800, padding: 20 }} >
          <h1>Malayicha Zonke!</h1>
          <p style={{ padding: 50, fontSize: 20, fontStyle: "bold" }}>
            Do you have stuff to move, or have a vehicle for moving stuff, but have no idea where to start looking?  We connect local owner transporters to people in need of transport to move anything, anywhere.
            Find and reserve trips that are available online.  If you are a transport provider, speak to us to set up a provider account and list your vehicle as available to move cargo.
          </p>
        </div>
      </Parallax >
      {/* <h2>| | |</h2>
      <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Dynamic Blur</div>
        </div>
      </Parallax> */}
      < h2 >| | |</h2 >
      <Parallax bgImage={image2} strength={500} bgImageStyle={{ bottom: -100 }}>
        <div style={{ height: 800 }}>
          <div style={insideStyles}>Reverse direction</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
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
        <div style={{ height: 800 }}>
          <div style={insideStyles}>Try it right now!</div>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax strength={500}>
        <Background className="custom-bg">
          <div
            style={{
              height: 2000,
              width: 2000,
              backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')"
            }}
          />
        </Background>
        <div>
          <br />
          custom background component
          <br />
          <br />
          custom background component
          <br />
          <br />
          custom background component
          <br />
          <br />
        </div>
      </Parallax>
      <div style={{ height: 800 }} />
      <h2>{"\u2728"}</h2>
    </div >
  );
};

export default HomePage;
