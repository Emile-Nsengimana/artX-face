import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import Img1 from '../img/card_1.jpg';
import Img2 from '../img/card_4.jpg';
import Img3 from '../img/card_7.jpg';
import Img4 from '../img/card_2.jpg';
import Img5 from '../img/card_5.jpg';
import Img6 from '../img/card_8.jpg';
import Home from '../img/main.jpg';
import ImageBox from '../components/ArtBox';
import TopTitle from '../components/TopTitle';
import About from '../components/About';
import Input from '../components/Input';


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
        <header
          className="header"
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(0, 0, 0, .1)), url(${Home}
            )`,
          }}
        >
          <NavBar />
          <Welcome />
        </header>

        <main className="container">
          <section className="section-products" id="new-products">
            <TopTitle title="NEW PRODUCT" />
            <ImageBox images={this.state.images} />

          </section>

          <section className="section-about" id="about">
            <About />
          </section>
          <section className="section-special-offers">
            <TopTitle title="SPECIAL OFFERS" />
            <div className="special-art">
              <ImageBox images={this.state.images_2} />
            </div>
          </section>
        </main>
        <footer className="footer">
          <section className="section-contact-us">
            <div className="contact-info">
              <Input type="text" placeholder="First name" />
              <Input type="text" placeholder="Last name" />
              <Input type="text" placeholder="E-mail" />
            </div>
            <div className="contact-msg">
              <textarea className="default-input" placeholder="Message" />
              <button type="button" className="btn-primary btn-left">Send</button>
            </div>
          </section>
          <h5>&copy;2020 ARTX. ALL RIGHTS RESERVED.</h5>
        </footer>
      </>
    );
  }
}

export default LandingPage;
