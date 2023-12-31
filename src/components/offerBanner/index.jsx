import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
function OfferBanner(props) {
  return (
    <section className='offer-banner'>
      <div className='container'>
        <div className='offer-banner-container'>
          <div className='offer-banner-box bkg-left text-white'>
            <p className='offer-banner-title'>Natural!!</p>
            <p className='offer-banner-text'>Get Garden Fresh Fruits</p>
          </div>
          <div className='offer-banner-box bkg-right text-green-bold'>
            <p className='offer-banner-title'>Offer!!</p>
            <p className='offer-banner-text'>Get 10% off on Vegetables</p>
          </div>
        </div>
      </div>
    </section>
  )
}

OfferBanner.propTypes = {}

export default OfferBanner
