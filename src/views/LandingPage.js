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
          <div className="menu">
            <NavBar />
          </div>
          <div className="display">
            <Welcome />
          </div>
          <div className="content">
            <h2 className="title-first">
                NEW PRODUCT 
            </h2>
            <div className="art-box">
              <ImageBox images={this.state.images} />
            </div>
          </div>
          <div className="about">
            <h2 className="title-first">
                SPECIAL OFFERS 
            </h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
            </p>
          </div>
          <div className="special-offer">
            <h2 className="title-first">
                SPECIAL OFFERS 
            </h2>
            <div className="art-box">
              <ImageBox images={this.state.images_2} />
            </div>
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
