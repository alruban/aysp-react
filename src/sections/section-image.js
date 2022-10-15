import React from 'react';
import LazyLoad from 'react-lazyload';

export default function Image(source) {

  return (
    <section
      className="image"
      data-index={`${ source.index }`}
    >
      <div className="image__inner container-image-fitscreen">
        <div className="image__body">
          <LazyLoad
            classNamePrefix="image__image"
          >
            <div
              className="image__image-overlay"
              style={{ backgroundImage: `url(${ source.highResolutionImage })`}}
            ></div>

            <div className="image__image">
              <img
                src={`${ source.lowResolutionImage }`}
                data-low-resolution-image
              />
            </div>
          </LazyLoad>
        </div>
      </div>
    </section>
  )
}
