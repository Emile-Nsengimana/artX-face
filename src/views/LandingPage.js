import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import Img1 from '../img/card_1.jpg';
import Img2 from '../img/card_4.jpg';
import Img3 from '../img/card_7.jpg';
import Img4 from '../img/card_2.jpg';
import Img5 from '../img/card_5.jpg';
import Img6 from '../img/card_8.jpg';
import ImageBox from '../components/ArtBox';
import TopTitle from '../components/TopTitle';
import About from '../components/About';

// eslint-disable-next-line react/prefer-stateless-function
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        Img1,
        Img2,
        Img3,
      ],
      images_2: [
        Img4,
        Img5,
        Img6,
      ],
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <NavBar />
          <Welcome />
          <div className="content">
            <TopTitle title="NEW PRODUCT" />
            <ImageBox images={this.state.images} />
          </div>
          <About />
          <div className="special-offer">
            <TopTitle title="SPECIAL OFFERS" />
            <ImageBox images={this.state.images_2} />
          </div>
          <div className="footer">
            <Footer />
            <h5>&copy;2020 ARTX. ALL RIGHTS RESERVED.</h5>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
