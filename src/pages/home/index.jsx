import React from 'react'
import About from "../../components/about"
import Blog from "../../components/blog"
import Counter from "../../components/counter"
import Gallery from "../../components/gallery"
import HeaderBanner from '../../components/headerBanner'
import Offer from "../../components/offer"
import OfferBanner from "../../components/offerBanner"
import Shop from "../../components/shop"
import WhoWeAre from "../../components/whoWeAre"
function HomePage(props) {
  return (
    <div>
      <HeaderBanner/>
      <OfferBanner/>
      <About/>
      <Shop/>
      <Counter/>
      <Offer/>
      <WhoWeAre/>
      <Gallery/>
      <Blog/>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage
