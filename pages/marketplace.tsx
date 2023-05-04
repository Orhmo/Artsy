import React from 'react'

import NavBar from './components/navBar'
import Footer from './components/footer'
import Artwork from './components/marketplace-layout/artwork'
const Marketplace = (): JSX.Element => {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <Artwork />
      <Footer />
    </div>
  )
}

export default Marketplace
