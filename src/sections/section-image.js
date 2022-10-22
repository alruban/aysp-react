import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.renderHighResolutionImage = this.renderHighResolutionImage.bind(this)
  }

  renderHighResolutionImage() {
    const classes = {
      hasLoaded: "has-loaded"
    }

    const lowResolutionImage = document.querySelector(`[data-index="${ this.props.index }"] [data-low-resolution-image]`);

    lowResolutionImage.addEventListener("load", () => {
      lowResolutionImage.classList.add(classes.hasLoaded);

      const imageBody = document.querySelector(`[data-index="${ this.props.index }"] .image__body`);
      const imageOverlay = document.createElement("img");

      imageOverlay.classList.add("image__image-overlay")
      imageOverlay.setAttribute("data-high-resolution-image", "true");
      imageOverlay.src = this.props.highResolutionImage;

      imageBody.insertBefore(imageOverlay, imageBody.firstChild)

      const highResolutionImage = document.querySelector(`[data-index="${ this.props.index }"] [data-high-resolution-image]`);
      highResolutionImage.addEventListener("load", () => highResolutionImage.classList.add(classes.hasLoaded));
    });
  }

  render() {
    return (
      <section
        className="image"
        data-index={`${ this.props.index }`}
      >
        <div className="image__inner container-image-fitscreen">
          <div className="image__body">
            <LazyLoadComponent
            afterLoad={ this.renderHighResolutionImage }
            >
              <img
                className="image__image"
                src={`${ this.props.lowResolutionImage }`}
                fetchpriority="high"
                data-low-resolution-image
              />
            </LazyLoadComponent>
          </div>
        </div>
      </section>
    )
  }
}

export default Image;
