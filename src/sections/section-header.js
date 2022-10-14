import React from 'react';
import { ReactSVG } from 'react-svg';
import { TranslateComponent } from 'react-translate-json/react';

export default function Header() {
  return (
    <header
      className="header"
      data-module="header"
    >
      <div className="header__inner">
        <div className="header__body">
          <div className="header-banner">
            <button
              className="header-banner__button"
              type="button"
              data-drawer-trigger="navigation"
            >
              <TranslateComponent label="header.children.navigation.title" render={(res) => (
                  <span className="header-banner__title util__screen-reader-only">{res}</span>
              )}/>

              <span className="header-banner__icon">
                <ReactSVG
                  src={ 'svg-icon-burger.svg' }
                  beforeInjection={(svg) => {
                    svg.classList.add("header-banner__svg")
                  }}
                />
              </span>
            </button>

            <a className="header-banner__title" href="/">
              <TranslateComponent label="global.title" render={(res) => res}/>

              <TranslateComponent label="global.subtitle" render={(res) => (
                  <span className="header-banner__subtitle">{res}</span>
              )}/>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}