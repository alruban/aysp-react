import React from 'react';

import Layout from '../layouts/layout';
import Header from '../sections/section-header';
import Image from '../sections/section-image';

let lowQualityImages =[];
let highQualityImages =[];

class Images extends React.Component {
  constructor() {
    super();
    lowQualityImages = this.importAll(require.context('../images/portfolio/lq', false, /\.(webp)$/));
    highQualityImages = this.importAll(require.context('../images/portfolio/hq', false, /\.(webp)$/));
  }

  importAll(r) {
    return r.keys().map(r);
  }

  render(){
    return(
      <>
        { lowQualityImages.map((image, index) => {

          const highResolutionImage = image.replace('lr_', 'hr_');

          return (
            <Image
              lowResolutionImage = { image }
              highResolutionImage = { highResolutionImage }
              index = { index }
              key = { index }
            />
          )
        }) }
      </>
    )
  }
}

const Index = () => (
  <Layout>
    <Header/>
    <Images/>
  </Layout>
);

export default Index;