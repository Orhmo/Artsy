import React, { useState } from 'react';

import NavBar from './components/navBar';
import Footer from './components/footer';
import Artwork from './components/marketplace-layout/artwork'
const Marketplace = (): JSX.Element => {
  

  return (
      <div>
          <NavBar />
          <Artwork />
      <Footer/>
     </div>
  );
};

export default Marketplace;

