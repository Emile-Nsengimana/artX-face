import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ArtBox extends React.Component {
  render() {
    return (
      <>
        {this.props.images.length !== 0
          ? this.props.images.map((img) => (
            <div key={img}>
              <img src={img} alt="" />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            </div>

          ))
          : <h3 className="not-found">Not found</h3>}
      </>
    );
  }
}

export default ArtBox;
