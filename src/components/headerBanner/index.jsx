import React from 'react'
import PropTypes from 'prop-types'
import "./style.scss"
function HeaderBanner(props) {
  return (
    <section className='header-banner'>
      <div className="container">
        <div className="banner-content">
          <p className="banner-content-title">100% Natural Food</p>
          <div className="banner-content-text">Choose the best healthier way of life</div>
          <button className="btn bkg-yellow btn-explore">Explore Now <span><i className="fa-solid fa-arrow-right"></i></span></button>
        </div>
      </div>
    </section>
  )
}

HeaderBanner.propTypes = {}

export default HeaderBanner
