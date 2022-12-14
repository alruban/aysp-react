import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import manifestJSON from '/src/favicons/site.webmanifest';
import browserconfigXML from '/src/favicons/browserconfig.xml';

import firstImage from '/src/images/portfolio/lq/lr_image-0.webp';
import fontFile from '/src/fonts/Canto.woff2';

import faviconICO from '/src/favicons/favicon.ico';

import favicon16x from '/src/favicons/favicon-16x16.png';
import favicon32x from '/src/favicons/favicon-32x32.png';

import faviconMs70x from '/src/favicons/mstile-70x70.png';
import faviconMs144x from '/src/favicons/mstile-144x144.png';
import faviconMs150x from '/src/favicons/mstile-150x150.png';
import faviconMs310x150 from '/src/favicons/mstile-310x150.png';
import faviconMs310x from '/src/favicons/mstile-310x310.png';

import faviconAppleIcon from '/src/favicons/apple-touch-icon.png';

import faviconAndroid192x from '/src/favicons/android-chrome-192x192.png';
import faviconAndroid512x from '/src/favicons/android-chrome-512x512.png';

const Layout = (props) => (
  <HelmetProvider>
    <Helmet>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta http-equiv="content-type" content="text/html;charset=utf-8"/>

      <link rel="canonical" href="https://www.areyouseeing.pictures"/>

      <title>are you seeing pictures</title>

      <meta name="author" content="Sam Clarke"/>
      <meta property="og:title" content="are you seeing pictures | Sam Clarke"/>
      <meta name="description" content=""/>
      <meta name="keywords" content="photography, photographs, portfolio, 35mm, film, sam, clarke, photographer, analog, celluloid"/>

      <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0"/>

      <link rel="preload" as="image" href={ firstImage }/>

      <link rel="icon" type="image/x-icon" href={ faviconICO }/>
      <link rel="icon" type="image/png" sizes="16x16" href={ favicon16x }/>
      <link rel="icon" type="image/png" sizes="32x32" href={ favicon32x }/>

      <link rel="apple-touch-icon" href={ faviconAppleIcon }/>

      <link rel="icon" type="image/png" sizes="192x192" href={ faviconAndroid192x }/>
      <link rel="icon" type="image/png" sizes="152x512" href={ faviconAndroid512x }/>

      <link rel="manifest" href={ manifestJSON }/>

      <meta name="theme-color" content="#f1f4f7"/>
      <meta name="msapplication-TileColor" content="#f1f4f7"/>
      <meta name="msapplication-config" content={ browserconfigXML }/>

      <meta name="msapplication-TileImage" content={ faviconMs70x }/>
      <meta name="msapplication-TileImage" content={ faviconMs144x }/>
      <meta name="msapplication-TileImage" content={ faviconMs150x }/>
      <meta name="msapplication-TileImage" content={ faviconMs310x150 }/>
      <meta name="msapplication-TileImage" content={ faviconMs310x }/>
    </Helmet>
    <div id="wrapper">
      <div id="main">
        {props.children}
      </div>
    </div>
  </HelmetProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Layout;