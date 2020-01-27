import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ArtBox extends React.Component {
  render() {
    return (
      <div className="art-box">
        {this.props.images.length !== 0
          ? this.props.images.map((img) => (
            <>
              <div key={img} className="art-img">
                <figure>
                  <img src={img} alt="" />
                  <figcaption className="art-details">
                    <h3>10, 000</h3>
                    <h3>Rwf</h3>
                    <h3>Peter N.</h3>
                  </figcaption>
                </figure>
              </div>
            </>
          ))
          : <h3 className="not-found">Not found</h3>}
      </div>
    );
  }
}

export default ArtBox;
