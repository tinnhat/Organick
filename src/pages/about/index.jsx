import React from "react"
import PropTypes from "prop-types"
import BannerImg from "../../components/bannerImg"
import pic from "../../assets/img/aboutBanner.png"
import About from "../../components/about"
import WhyChooseUs from "../../components/whyChooseUs"
import Team from "../../components/team"
import OfferProduct from "../../components/offerProduct"
function AboutPage(props) {
  return (
    <div className='about-page'>
      <BannerImg pic={pic} />
      <About />
      <WhyChooseUs/>
      <Team/>
      <OfferProduct/>
    </div>
  )
}

AboutPage.propTypes = {}

export default AboutPage
