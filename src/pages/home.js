import React from 'react';

import Layout from '../layouts/layout';
import Header from '../sections/section-header';
import Image from '../sections/section-image';

var listOfImages =[];

class Images extends React.Component{
  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    listOfImages = this.importAll(require.context('../images', false, /\.(webp)$/));
  }

  render(){
    return(
      <>
        { listOfImages.map((image, index) => {
          return (
            <Image source={image} key={index} />
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