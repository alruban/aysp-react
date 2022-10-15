import React from 'react';

export default function Image(source, key) {

  return (
    <section className="image">
      <div className="image__inner container-image-fitscreen">
        <div className="image__body">
          <div className="image__image-container">
            <div className="image__image">
              <img
                src={`${ source.source }`}
                data-image-number={`${ key.key }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
