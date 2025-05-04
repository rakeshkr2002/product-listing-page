import React from 'react'

import "../css/Home.css"
import NavHome from '../components/navHome'
import NavMain from '../components/NavMain'
import Footer from '../components/Footer'
import ProductsList from '../components/ProductsList'

const Home = () => {
  return (
    <div className='home'>
       <NavHome/>
       <NavMain/>
       <ProductsList/>
       <Footer></Footer>
    </div>
  )
}


export default Home